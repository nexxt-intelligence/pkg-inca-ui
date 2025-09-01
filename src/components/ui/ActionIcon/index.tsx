import {
    ActionIcon as MantineActionIcon,
    ActionIconProps as MantineActionIconProps
} from '@mantine/core';
import Icon, { TablerIconKeys } from '../Icon';

export interface ActionIconProps extends MantineActionIconProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    icon: TablerIconKeys;
}

const ActionIcon = ({
    icon,
    variant = 'filled',
    ...props
}: ActionIconProps) => {
    return (
        <MantineActionIcon data-variant={variant} variant={variant} {...props}>
            <Icon type={icon} size={props.size} />
        </MantineActionIcon>
    );
};

export default ActionIcon;
