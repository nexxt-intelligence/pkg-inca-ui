import {
    ActionIcon as MantineActionIcon,
    ActionIconProps as MantineActionIconProps,
    MantineSize
} from '@mantine/core';
import * as React from 'react';

import { type StrictButtonProps } from '../../../types/props';
import { cx } from '../../../utils/cx';
import Icon, { TablerIconKeys } from '../Icon';
import classes from './ActionIcon.module.css';

const getMantineColor = (color: ActionIconProps['color']) =>
    color === 'primary' ? 'blue' : color;

export interface ActionIconProps
    extends Omit<StrictButtonProps<MantineActionIconProps>, 'onClick'> {
    icon: TablerIconKeys;
    iconRotate?: number;
    iconSize?: '2xs' | ({} & string) | MantineSize | number;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ActionIcon = React.forwardRef<HTMLButtonElement, ActionIconProps>(
    (
        {
            className,
            color = 'primary',
            icon,
            iconRotate = 0,
            iconSize,
            size = 'sm',
            variant = 'filled',
            ...props
        },
        ref
    ) => {
        return (
            <MantineActionIcon
                className={cx(classes.actionIcon, className)}
                color={getMantineColor(color)}
                data-variant={variant}
                size={size}
                variant={variant}
                {...props}
                ref={ref}
            >
                <Icon
                    iconRotate={iconRotate}
                    size={iconSize ?? size}
                    type={icon}
                />
            </MantineActionIcon>
        );
    }
);

export default ActionIcon;
