import { Title, Center, Stack, Button } from '@mantine/core';
import Icon, { TablerIconKeys } from '../ui/Icon';
import Text from '../ui/Text';
import classes from './ActionCard.module.css';

export interface ActionCardProps {
    title: string;
    description: string;
    icon: TablerIconKeys;
    onClick: () => void;
    disabled?: boolean;
}

const ActionCard = ({
    title,
    description,
    icon,
    onClick,
    disabled
}: ActionCardProps) => {
    return (
        <Button
            className={classes.root}
            onClick={onClick}
            disabled={disabled}
            classNames={{
                label: classes.label
            }}
        >
            <Center h={340}>
                <Stack spacing="xs" align="center">
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
