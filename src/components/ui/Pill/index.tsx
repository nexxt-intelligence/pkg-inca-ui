import {
    Pill as MantinePill,
    PillGroupProps as MantinePillGroupProps,
    PillProps as MantinePillProps
} from '@mantine/core';
import * as React from 'react';

import { type StrictProps } from '../../../types/props';

export type PillGroupProps = StrictProps<MantinePillGroupProps>;
export type PillProps = StrictProps<MantinePillProps>;

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
    ({ children, size = 'sm', ...props }, ref) => (
        <MantinePill size={size} {...props} ref={ref}>
            {children}
        </MantinePill>
    )
);

const PillGroup = React.forwardRef<HTMLDivElement, PillGroupProps>(
    ({ children, size = 'sm', ...props }, ref) => (
        <MantinePill.Group size={size} {...props} ref={ref}>
            {children}
        </MantinePill.Group>
    )
);

Pill.displayName = 'Pill';
PillGroup.displayName = 'PillGroup';

export { PillGroup };
export default Pill;
