import { useEffect, useState } from 'react';

/** The maintenance site's `/status.json`. */
export interface MaintenanceStatus {
    bannerActive: boolean;
    blockActive: boolean;
    endUtc?: null | string;
    id?: string;
    message?: null | string;
    startUtc?: null | string;
}

const POLL_INTERVAL_MS = 60_000;

/**
 * Fetches `statusUrl` (the app's `MAINTENANCE_STATUS_URL`) on mount, every 60 seconds and when the tab becomes
 * visible again. Returns `null` until the first successful fetch and keeps the last status on any error.
 */
export const useMaintenanceStatus = (statusUrl?: string) => {
    const [status, setStatus] = useState<MaintenanceStatus | null>(null);

    useEffect(() => {
        if (!statusUrl) return;
        let cancelled = false;

        const load = async () => {
            if (document.hidden) return;
            try {
                const res = await fetch(statusUrl, {
                    cache: 'no-store',
                    credentials: 'omit'
                });
                if (!res.ok) return;
                const next: MaintenanceStatus = await res.json();
                if (!cancelled) setStatus(next);
            } catch {
                // Fail open: keep the last known status.
            }
        };

        load();
        const timer = window.setInterval(load, POLL_INTERVAL_MS);
        document.addEventListener('visibilitychange', load);
        return () => {
            cancelled = true;
            window.clearInterval(timer);
            document.removeEventListener('visibilitychange', load);
        };
    }, [statusUrl]);

    return status;
};
