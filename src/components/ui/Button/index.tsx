import { Button as MantineButton } from '@mantine/core';
import Icon from '../Icon';
import classes from './Button.module.css';

type ButtonProps = React.ComponentProps<typeof MantineButton>;

const Button = ({
    color = 'primary',
    compact = false,
    radius = 'sm',
    size = 'sm',
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
            leftIcon={leftIcon ? <Icon type={leftIcon} size={size} /> : null}
            rightIcon={rightIcon ? <Icon type={rightIcon} size={size} /> : null}
            {...props}
        >
            {children}
        </MantineButton>
    );
};

export default Button;
