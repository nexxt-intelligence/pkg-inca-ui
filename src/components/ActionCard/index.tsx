import { Button, Center, Stack } from '@mantine/core';

import Icon, { TablerIconKeys } from '../ui/Icon';
import Text from '../ui/Text';
import classes from './ActionCard.module.css';

export interface ActionCardProps {
    /** Short text under the title. Line breaks (`\n`) are kept. */
    description: string;
    /** Disables the card. */
    disabled?: boolean;
    /** Tabler icon name shown at the top, e.g. `"IconPlus"` or `"IconFileText"`. */
    icon: TablerIconKeys;
    /** Called when the card is clicked. */
    onClick: () => void;
    /** Main label of the card. */
    title: string;
}

/**
 * **Custom inca-ui component** (not part of Mantine).
 *
 * Large clickable card with an icon, a title and a short description. Use it for picking between a few big options.
 */
const ActionCard = ({
    description,
    disabled,
    icon,
    onClick,
    title
}: ActionCardProps) => {
    return (
        <Button
            className={classes.root}
            classNames={{
                label: classes.label
            }}
            disabled={disabled}
            onClick={onClick}
        >
            <Center h={340}>
                <Stack align="center" spacing="xs">
                    <Icon size="36px" type={icon} />
                    <Text size="xl">{title}</Text>
                    <Text align="center" size="xs">
                        {description}
                    </Text>
                </Stack>
            </Center>
        </Button>
    );
};

export default ActionCard;
