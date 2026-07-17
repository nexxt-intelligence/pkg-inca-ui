import {
    Badge as MantineBadge,
    BadgeProps as MantineBadgeProps
} from '@mantine/core';
import * as React from 'react';

import { type StrictProps } from '../../../types/props';
import classes from './Badge.module.css';

type BadgeProps = {
    children: React.ReactNode;
} & StrictProps<MantineBadgeProps>;

export default function Badge({ children, size = 'md', ...props }: BadgeProps) {
    return (
        <MantineBadge
            className={classes.badge}
            classNames={{
                root: classes.root,
                section: classes.section
            }}
            data-size={size}
            fw={600}
            size={size}
            {...props}
        >
            {children}
        </MantineBadge>
    );
}

export type { BadgeProps };
