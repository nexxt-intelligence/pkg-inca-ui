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
    const fontSize = {
        xs: '2xs',
        sm: '2xs',
        md: 'xs',
        lg: 'sm',
        xl: 'md'
    };
    return (
        <MantineBadge
            className={classes.badge}
            data-size={size}
            size={size}
            fw={600}
            fz={fontSize?.[size as keyof typeof fontSize]}
            {...props}
        >
            {children}
        </MantineBadge>
    );
}
