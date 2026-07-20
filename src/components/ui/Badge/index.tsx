import {
    Badge as MantineBadge,
    BadgeProps as MantineBadgeProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';

export type BadgeProps = StrictProps<MantineBadgeProps>;

const Badge = ({ children, ...props }: BadgeProps) => {
    return <MantineBadge {...props}>{children}</MantineBadge>;
};

export default Badge;
