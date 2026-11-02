import type { ReactNode } from 'react';

import { Box } from '../..';

/** Colored placeholder used in the layout docs. */
const DemoBox = ({ children }: { children?: ReactNode }) => (
    <Box
        bg="var(--bg-accent-light)"
        c="var(--text-accent)"
        p="sm"
        style={{ borderRadius: 'var(--radius-sm)' }}
        ta="center"
    >
        {children}
    </Box>
);

export default DemoBox;
