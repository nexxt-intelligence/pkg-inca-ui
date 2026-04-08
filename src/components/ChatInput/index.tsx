import { Group, Stack } from '@mantine/core';

import ActionIcon from '../ui/ActionIcon';
import TextArea, { TextAreaProps } from '../ui/TextArea';
import classes from './ChatInput.module.css';

export interface ChatInputProps extends TextAreaProps {
    disabled?: boolean;
    handleSend: () => void;
}

const ChatInput = ({
    disabled,
    handleSend,
    placeholder,
    ...props
}: ChatInputProps) => {
    return (
        <Stack
            className={`${classes.chatInput} ${disabled && classes.disabled}`}
            spacing={0}
        >
            <TextArea
                disabled={disabled}
                placeholder={placeholder}
                variant="unstyled"
                {...props}
            />
            <Group position="apart">
                <Group spacing={0}>{/* future icons here? */}</Group>
                <Group position="right" spacing={0}>
                    <ActionIcon
                        color="blue"
                        disabled={disabled}
                        icon="IconSend"
                        onClick={handleSend}
                        variant="subtle"
                    />
                </Group>
            </Group>
        </Stack>
    );
};

export default ChatInput;
