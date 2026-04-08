import {
    ActionIcon as MantineActionIcon,
    ActionIconProps as MantineActionIconProps
} from '@mantine/core';

import Icon, { TablerIconKeys } from '../Icon';

export interface ActionIconProps extends MantineActionIconProps {
    icon: TablerIconKeys;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ActionIcon = ({
    color = 'primary',
    icon,
    size = 'sm',
    variant = 'filled',
    ...props
}: ActionIconProps) => {
    return (
        <MantineActionIcon
            color={color}
            data-variant={variant}
            size={size}
            variant={variant}
            {...props}
        >
            <Icon size={size} type={icon} />
        </MantineActionIcon>
    );
};

export default ActionIcon;
