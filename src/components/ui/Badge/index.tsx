import {
    Badge as MantineBadge,
    BadgeProps as MantineBadgeProps
} from '@mantine/core';
import * as React from 'react';

import { type StrictProps } from '../../../types/props';
import classes from './Badge.module.css';

export type BadgeProps = {
    children: React.ReactNode;
} & StrictProps<MantineBadgeProps>;

/**
 * Small status label. Mantine [Badge](https://v6.mantine.dev/core/badge/) with inca-ui sizes and colors.
 */
const Badge = ({ children, size = 'md', ...props }: BadgeProps) => {
    return (
        <MantineBadge
            classNames={{
                leftSection: classes.leftSection,
                root: classes.root
            }}
            data-size={size}
            fw={600}
            size={size}
            {...props}
        >
            {children}
        </MantineBadge>
    );
};

export default Badge;
