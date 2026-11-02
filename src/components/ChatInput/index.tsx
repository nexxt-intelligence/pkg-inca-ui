import { Group, Stack } from '@mantine/core';

import { cx } from '../../utils/cx';
import ActionIcon from '../ui/ActionIcon';
import TextArea, { TextAreaProps } from '../ui/TextArea';
import classes from './ChatInput.module.css';

export interface ChatInputProps extends TextAreaProps {
    /** Disables the text area and the send button. */
    disabled?: boolean;
    /** Called when the send button is clicked. */
    handleSend: () => void;
}

/**
 * **Custom inca-ui component** (not part of Mantine).
 *
 * Auto-growing text area with a send button. Takes all `TextArea` props.
 */
const ChatInput = ({
    disabled,
    handleSend,
    placeholder,
    ...props
}: ChatInputProps) => {
    return (
        <Stack
            className={cx(classes.root, disabled && classes.disabled)}
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
