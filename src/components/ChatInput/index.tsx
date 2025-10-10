import { Group, Stack } from '@mantine/core';
import TextArea, { TextAreaProps } from '../ui/TextArea';
import ActionIcon from '../ui/ActionIcon';

import classes from './ChatInput.module.css';

export interface ChatInputProps extends TextAreaProps {
    handleSend: () => void;
    disabled?: boolean;
}

const ChatInput = ({
    handleSend,
    placeholder,
    disabled,
    ...props
}: ChatInputProps) => {
    return (
        <Stack
            className={`${classes.chatInput} ${disabled && classes.disabled}`}
            spacing={0}
        >
            <TextArea
                variant="unstyled"
                placeholder={placeholder}
                disabled={disabled}
                {...props}
            />
            <Group position="apart">
                <Group spacing={0}>{/* future icons here? */}</Group>
                <Group position="right" spacing={0}>
                    <ActionIcon
                        icon="IconSend"
                        variant="subtle"
                        color="blue"
                        onClick={handleSend}
                        disabled={disabled}
                    />
                </Group>
            </Group>
        </Stack>
    );
};

export default ChatInput;
