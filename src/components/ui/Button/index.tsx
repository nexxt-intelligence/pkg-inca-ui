import {
    Button as MantineButton,
    ButtonProps as MantineButtonProps
} from '@mantine/core';
import { clsx } from '@mantine/core';

import Icon, { TablerIconKeys } from '../Icon';
import classes from './Button.module.css';

export interface ButtonProps extends MantineButtonProps {
    // TODO: remove react.element later so only string can be accepted
    leftIcon?: React.ReactElement | TablerIconKeys;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    rightIcon?: React.ReactElement | TablerIconKeys;
}

const Button = ({
    children,
    className,
    color = 'primary',
    compact = false,
    leftIcon,
    radius = 'sm',
    rightIcon,
    size = 'sm',
    type = 'button',
    variant = 'filled',
    ...props
}: ButtonProps) => {
    return (
        <MantineButton
            className={clsx(className, classes.transition)}
            classNames={{
                leftIcon: classes.leftIcon,
                rightIcon: classes.rightIcon
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
        >
            {children}
        </MantineButton>
    );
};

export default Button;
