import { ActionIcon as MantineActionIcon } from '@mantine/core';
import Icon, { TablerIconKeys } from '../Icon';

type ActionIconProps = React.ComponentProps<typeof MantineActionIcon> & {
    icon: TablerIconKeys;
};

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
