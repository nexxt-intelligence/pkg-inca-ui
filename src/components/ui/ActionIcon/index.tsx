import {
    ActionIcon as MantineActionIcon,
    ActionIconProps as MantineActionIconProps,
    MantineNumberSize
} from '@mantine/core';
import * as React from 'react';

import { type StrictButtonProps } from '../../../types/props';
import { cx } from '../../../utils/cx';
import Icon, { TablerIconKeys } from '../Icon';
import classes from './ActionIcon.module.css';

export interface ActionIconProps
    extends Omit<StrictButtonProps<MantineActionIconProps>, 'onClick'> {
    /** Tabler icon name, e.g. `"IconPencil"` or `"IconTrash"`. */
    icon: TablerIconKeys;
    /** Rotates the icon, in degrees. */
    iconRotate?: number;
    /** Icon size. Defaults to the button `size`. */
    iconSize?: '2xs' | MantineNumberSize;
    /** Called when the button is clicked. */
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Icon-only button. Built on Mantine [ActionIcon](https://v6.mantine.dev/core/action-icon/).
 *
 * inca-ui adds `icon` (a Tabler icon name) and a `muted` variant.
 */
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
                className={cx(classes.root, className)}
                color={color}
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
