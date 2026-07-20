import {
    ActionIcon as MantineActionIcon,
    ActionIconProps as MantineActionIconProps,
    MantineSize
} from '@mantine/core';
import * as React from 'react';

import { type StrictButtonProps } from '../../../types/props';
import Icon, { TablerIconKeys } from '../Icon';

export interface ActionIconProps
    extends StrictButtonProps<MantineActionIconProps> {
    icon: TablerIconKeys;
    iconRotate?: number;
    iconSize?: '2xs' | ({} & string) | MantineSize | number;
}

const ActionIcon = React.forwardRef<HTMLButtonElement, ActionIconProps>(
    (
        {
            color,
            icon,
            iconRotate,
            iconSize,
            size = 'sm',
            variant,
            ...props
        },
        ref
    ) => {
        return (
            <MantineActionIcon
                color={color}
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
