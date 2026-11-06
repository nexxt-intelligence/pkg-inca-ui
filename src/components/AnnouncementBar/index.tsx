import { useEffect, useState } from 'react';

import { useMaintenanceStatus } from '../../hooks/useMaintenanceStatus';
import Badge from '../ui/Badge';
import CloseButton from '../ui/CloseButton';
import Text from '../ui/Text';
import classes from './AnnouncementBar.module.css';

const DISMISS_COOKIE = 'inca-maintenance-dismissed';
const BYPASS_COOKIE = 'maintenance_bypassed';
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

const readCookie = (name: string) => {
    const cookie = document.cookie
        .split('; ')
        .find((entry) => entry.startsWith(`${name}=`));
    return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : null;
};

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        timeZone: 'UTC',
        year: 'numeric'
    });

const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'UTC'
    });

const defaultMessage = (startUtc?: null | string, endUtc?: null | string) =>
    startUtc && endUtc
        ? `The inca platform will be unavailable on ${formatDate(
              startUtc
          )}, from ${formatTime(startUtc)} to ${formatTime(
              endUtc
          )} UTC due to a scheduled platform upgrade. Live data collection will not be affected.`
        : null;

export interface AnnouncementBarProps {
    /** The app's `MAINTENANCE_STATUS_URL` */
    statusUrl?: string;
}

/**
 * **Custom inca-ui component** (not part of Mantine).
 *
 * - `useMaintenanceStatus` fetches `statusUrl` on mount, every 60 seconds, and when the tab becomes visible again.
 * - Shows while `bannerActive` is true, with `message`, or a default message built from `startUtc` and `endUtc` (in UTC).
 * - The close button saves the event `id` in the `inca-maintenance-dismissed` cookie, so the bar stays hidden until the
 *   next maintenance event (new `id`).
 * - When `blockActive` turns true, it sends the tab to the maintenance page with `returnTo`.
 * - Renders nothing if the fetch fails.
 */
const AnnouncementBar = ({ statusUrl }: AnnouncementBarProps) => {
    const status = useMaintenanceStatus(statusUrl);
    const [dismissedId, setDismissedId] = useState(() =>
        readCookie(DISMISS_COOKIE)
    );

    // Send open tabs to the maintenance page once the window starts.
    useEffect(() => {
        if (
            !statusUrl ||
            !status?.blockActive ||
            readCookie(BYPASS_COOKIE) !== null
        ) {
            return;
        }
        const target = new URL('/', statusUrl);
        target.searchParams.set('returnTo', window.location.href);
        window.location.assign(target.toString());
    }, [status?.blockActive, statusUrl]);

    if (!status?.bannerActive || !status.id || status.id === dismissedId) {
        return null;
    }
    const text =
        status.message ?? defaultMessage(status.startUtc, status.endUtc);
    if (!text) return null;

    const eventId = status.id;
    const dismiss = () => {
        document.cookie = `${DISMISS_COOKIE}=${encodeURIComponent(
            eventId
        )}; path=/; max-age=${ONE_YEAR_IN_SECONDS}; SameSite=Lax`;
        setDismissedId(eventId);
    };

    return (
        <div className={classes.root} role="status">
            <div className={classes.content}>
                <Badge className={classes.badge} color="red" variant="dot">
                    Scheduled maintenance
                </Badge>
                <Text c="var(--text-default)" size="md">
                    {text}
                </Text>
            </div>
            <CloseButton
                aria-label="Dismiss"
                className={classes.closeButton}
                onClick={dismiss}
            />
        </div>
    );
};

export default AnnouncementBar;
