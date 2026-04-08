import {
    Badge as MantineBadge,
    BadgeProps as MantineBadgeProps
} from '@mantine/core';
import * as React from 'react';

import classes from './Badge.module.css';

type BadgeProps = {
    children: React.ReactNode;
} & MantineBadgeProps;

export default function Badge({ children, size = 'md', ...props }: BadgeProps) {
    return (
        <MantineBadge
            className={classes.badge}
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
}
