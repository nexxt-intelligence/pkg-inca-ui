import {
    ActionIcon as MantineActionIcon,
    ActionIconProps as MantineActionIconProps,
    MantineNumberSize
} from '@mantine/core';
import { clsx } from '@mantine/core';

import Icon, { TablerIconKeys } from '../Icon';
import classes from './ActionIcon.module.css';

export interface ActionIconProps extends MantineActionIconProps {
    icon: TablerIconKeys;
    iconSize?: '2xs' | MantineNumberSize;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ActionIcon = ({
    className,
    color = 'primary',
    icon,
    iconSize,
    size = 'sm',
    variant = 'filled',
    ...props
}: ActionIconProps) => {
    return (
        <MantineActionIcon
            className={clsx(classes.actionIcon, className)}
            color={color}
            data-variant={variant}
            size={size}
            variant={variant}
            {...props}
        >
            <Icon size={iconSize ?? size} type={icon} />
        </MantineActionIcon>
    );
};

export default ActionIcon;
