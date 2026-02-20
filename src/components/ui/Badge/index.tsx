import * as React from 'react';
import {
    Badge as MantineBadge,
    BadgeProps as MantineBadgeProps
} from '@mantine/core';
import classes from './Badge.module.css';

type BadgeProps = MantineBadgeProps & {
    children: React.ReactNode;
};

export default function Badge({ children, size = 'md', ...props }: BadgeProps) {
    return (
        <MantineBadge
            className={classes.badge}
            data-size={size}
            classNames={{ leftSection: classes.leftSection }}
            size={size}
            fw={600}
            {...props}
        >
            {children}
        </MantineBadge>
    );
}
