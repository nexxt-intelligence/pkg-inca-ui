import {
    Button as MantineButton,
    ButtonProps as MantineButtonProps
} from '@mantine/core';
import * as React from 'react';

import { type StrictButtonProps } from '../../../types/props';
import { cx } from '../../../utils/cx';
import Icon, { TablerIconKeys } from '../Icon';
import classes from './Button.module.css';

export interface ButtonProps
    extends Omit<
        StrictButtonProps<MantineButtonProps>,
        'leftIcon' | 'rightIcon'
    > {
    /** Icon before the label: a Tabler icon name, e.g. `"IconPlus"` or `"IconDownload"`. React elements still work but will be removed later. */
    leftIcon?: React.ReactElement | TablerIconKeys;
    /** Called when the button is clicked. */
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Icon after the label: a Tabler icon name, e.g. `"IconChevronDown"` or `"IconArrowRight"`. React elements still work but will be removed later. */
    rightIcon?: React.ReactElement | TablerIconKeys;
}

/**
 * Mantine [Button](https://v6.mantine.dev/core/button/) with inca-ui sizes and defaults.
 *
 * `leftIcon` / `rightIcon` take a Tabler icon name.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            color = 'primary',
            compact = false,
            fullWidth = false,
            leftIcon,
            radius = 'sm',
            rightIcon,
            size = 'sm',
            type = 'button',
            variant = 'filled',
            ...props
        },
        ref
    ) => {
        return (
            <MantineButton
                className={cx(className, classes.button)}
                classNames={{
                    leftIcon: classes.leftIcon,
                    rightIcon: classes.rightIcon,
                    root: fullWidth ? undefined : classes.root
                }}
                color={color}
                compact={compact}
                data-color={color}
                data-compact={compact}
                data-size={size}
                data-variant={variant}
                leftIcon={
                    typeof leftIcon === 'string' ? (
                        <Icon size={size} type={leftIcon} />
                    ) : (
                        leftIcon
                    )
                }
                radius={radius}
                rightIcon={
                    typeof rightIcon === 'string' ? (
                        <Icon size={size} type={rightIcon} />
                    ) : (
                        rightIcon
                    )
                }
                size={size}
                type={type}
                variant={variant}
                {...props}
                ref={ref}
            >
                {children}
            </MantineButton>
        );
    }
);

export default Button;
