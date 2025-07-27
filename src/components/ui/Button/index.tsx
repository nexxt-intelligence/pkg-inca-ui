import {
    Button as MantineButton,
    ButtonProps as MantineButtonProps
} from '@mantine/core';
import classes from './Button.module.css';
import { clsx } from '@mantine/core';

export interface ButtonProps extends MantineButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    variant?:
        | MantineButtonProps['variant']
        | 'modalCloseText'
        | 'projectCard'
        | 'transparent'
        | 'usefulLinks';
}

const VARIANT_STYLES = {
    modalCloseText: { size: 'xs', color: 'gray' },
    projectCard: { size: 'xs', compact: true, uppercase: true },
    usefulLinks: { size: 'lg', compact: true }
};

const Button = ({
    children,
    color = 'blue',
    compact = false,
    leftIcon,
    onClick,
    radius = 'md',
    size = 'sm',
    type = 'button',
    uppercase,
    variant = 'filled',
    ...props
}: ButtonProps) => {
    const variantStyles =
        (VARIANT_STYLES as Record<string, Partial<ButtonProps>>)[variant] || {};
    return (
        <MantineButton
            className={clsx(classes.button, classes[variant])}
            classNames={{
                root: leftIcon ? classes.iconPadding : '',
                leftIcon: classes.leftIcon
            }}
            color={variantStyles.color || color}
            compact={variantStyles.compact ?? compact}
            data-compact={variantStyles.compact ?? compact}
            data-variant={variant}
            data-size={size}
            leftIcon={leftIcon}
            onClick={onClick}
            radius={radius}
            size={variantStyles.size || size}
            type={type}
            uppercase={variantStyles.uppercase ?? uppercase}
            variant={variant}
            {...props}
        >
            {children}
        </MantineButton>
    );
};

export default Button;
