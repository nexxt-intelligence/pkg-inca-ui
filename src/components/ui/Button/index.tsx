import {
    Button as MantineButton,
    ButtonProps as MantineButtonProps
} from '@mantine/core';
import * as React from 'react';

import { type StrictButtonProps } from '../../../types/props';
import Icon, { TablerIconKeys } from '../Icon';

const getIconSize = (size: ButtonProps['size']) =>
    size === 'md'
        ? 'sm'
        : typeof size === 'string' && size.startsWith('compact-')
        ? size.replace('compact-', '')
        : size;

export interface ButtonProps
    extends Omit<
        StrictButtonProps<MantineButtonProps>,
        'leftIcon' | 'leftSection' | 'rightIcon' | 'rightSection'
    > {
    compact?: boolean;
    // TODO: remove react.element later so only string can be accepted
    leftIcon?: React.ReactElement | TablerIconKeys;
    rightIcon?: React.ReactElement | TablerIconKeys;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            color,
            compact = false,
            leftIcon,
            rightIcon,
            size = 'sm',
            variant = 'filled',
            ...props
        },
        ref
    ) => {
        const resolvedSize =
            compact && typeof size === 'string' && !size.startsWith('compact-')
                ? (`compact-${size}` as MantineButtonProps['size'])
                : size;

        return (
            <MantineButton
                color={color}
                leftSection={
                    typeof leftIcon === 'string' ? (
                        <Icon
                            size={getIconSize(resolvedSize)}
                            type={leftIcon}
                        />
                    ) : (
                        leftIcon
                    )
                }
                ref={ref}
                rightSection={
                    typeof rightIcon === 'string' ? (
                        <Icon
                            size={getIconSize(resolvedSize)}
                            type={rightIcon}
                        />
                    ) : (
                        rightIcon
                    )
                }
                size={resolvedSize}
                variant={variant}
                {...props}
            >
                {children}
            </MantineButton>
        );
    }
);

export default Button;
