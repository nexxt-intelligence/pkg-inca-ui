import {
    Button as MantineButton,
    ButtonProps as MantineButtonProps
} from '@mantine/core';
import * as React from 'react';

import { type StrictButtonProps } from '../../../types/props';
import { cx } from '../../../utils/cx';
import Icon, { TablerIconKeys } from '../Icon';
import classes from './Button.module.css';

const getMantineColor = (color: ButtonProps['color']) =>
    color === 'primary' ? 'blue' : color;

export interface ButtonProps
    extends Omit<
        StrictButtonProps<MantineButtonProps>,
        'leftIcon' | 'leftSection' | 'rightIcon' | 'rightSection'
    > {
    compact?: boolean;
    // TODO: remove react.element later so only string can be accepted
    leftIcon?: React.ReactElement | TablerIconKeys;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    rightIcon?: React.ReactElement | TablerIconKeys;
}

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
                className={cx(
                    !fullWidth && classes.root,
                    classes.control,
                    className
                )}
                classNames={{
                    section: classes.section
                }}
                color={getMantineColor(color)}
                data-color={color}
                data-compact={compact}
                data-size={size}
                data-variant={variant}
                leftSection={
                    typeof leftIcon === 'string' ? (
                        <Icon size={size} type={leftIcon} />
                    ) : (
                        leftIcon
                    )
                }
                radius={radius}
                rightSection={
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
