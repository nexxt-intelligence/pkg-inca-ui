import { Button, Center, Stack } from '@mantine/core';

import Icon, { TablerIconKeys } from '../ui/Icon';
import Text from '../ui/Text';
import classes from './ActionCard.module.css';

export interface ActionCardProps {
    description: string;
    disabled?: boolean;
    icon: TablerIconKeys;
    onClick: () => void;
    title: string;
}

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
