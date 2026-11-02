import { CopyButton, Flex } from '@mantine/core';

import Button from '../ui/Button';
import TextInput, { type TextInputProps } from '../ui/TextInput';
import Tooltip from '../ui/Tooltip';

export interface LinkCopyInputProps extends TextInputProps {
    /** Label above the input. */
    label: string;
    /** The link shown in the input and copied to the clipboard. */
    value: string;
}

/**
 * **Custom inca-ui component** (not part of Mantine).
 *
 * Read-only link field with a Copy button. Takes all `TextInput` props.
 */
const LinkCopyInput = ({ label, value, ...props }: LinkCopyInputProps) => {
    return (
        <Flex align="flex-end" gap="xs" w="100%" wrap="nowrap">
            <TextInput
                label={label}
                readOnly
                value={value}
                variant="filled"
                w="100%"
                {...props}
            />
            <CopyButton timeout={2000} value={value}>
                {({ copied, copy }) => (
                    <Tooltip disabled={!copied} label="Copied!" opened={copied}>
                        <Button
                            leftIcon="IconCopy"
                            onClick={copy}
                            variant="default"
                        >
                            Copy
                        </Button>
                    </Tooltip>
                )}
            </CopyButton>
        </Flex>
    );
};

export default LinkCopyInput;
