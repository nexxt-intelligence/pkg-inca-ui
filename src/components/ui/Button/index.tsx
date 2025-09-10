import {
    Button as MantineButton,
    ButtonProps as MantineButtonProps
} from '@mantine/core';
import Icon, { TablerIconKeys } from '../Icon';
import classes from './Button.module.css';

export interface ButtonProps extends MantineButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    // TODO: remove react.element later so only string can be accepted
    leftIcon?: TablerIconKeys | React.ReactElement;
    rightIcon?: TablerIconKeys | React.ReactElement;
}

const Button = ({
    color = 'primary',
    compact = false,
    radius = 'sm',
    size = 'xs',
    type = 'button',
    variant = 'filled',
    leftIcon,
    rightIcon,
    children,
    ...props
}: ButtonProps) => {
    return (
        <MantineButton
            classNames={{
                leftIcon: classes.leftIcon,
                rightIcon: classes.rightIcon
            }}
            color={color}
            compact={compact}
            data-compact={compact}
            data-size={size}
            radius={radius}
            size={size}
            type={type}
            variant={variant}
            leftIcon={
                typeof leftIcon === 'string' ? (
                    <Icon type={leftIcon} size={size} />
                ) : (
                    leftIcon
                )
            }
            rightIcon={
                typeof rightIcon === 'string' ? (
                    <Icon type={rightIcon} size={size} />
                ) : (
                    rightIcon
                )
            }
            {...props}
        >
            {children}
        </MantineButton>
    );
};

export default Button;
