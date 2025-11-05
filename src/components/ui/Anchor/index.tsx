import {
    Group,
    Anchor as MantineAnchor,
    AnchorProps as MantineAnchorProps
} from '@mantine/core';
import Tooltip from '../Tooltip';
import Icon from '../Icon';

export interface AnchorProps extends MantineAnchorProps {
    tooltip?: string;
}

const Anchor = ({ tooltip, ...props }: AnchorProps) => {
    const tooltipIcon = tooltip && (
        <Tooltip label={tooltip}>
            <Icon type="IconHelp" size="xs" color="gray" />
        </Tooltip>
    );

    return (
        <Group spacing="2xs">
            <MantineAnchor size="sm" {...props} />
            {tooltip && tooltipIcon}
        </Group>
    );
};

export default Anchor;
