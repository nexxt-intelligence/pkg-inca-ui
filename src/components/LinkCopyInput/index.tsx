import { CopyButton, Flex } from '@mantine/core';

import { Button, TextInput, TextInputProps, Tooltip } from '../..';

export interface LinkCopyInputProps extends TextInputProps {
    label: string;
    value: string;
}

const LinkCopyInput = ({ label, value, ...props }: LinkCopyInputProps) => {
    return (
        <Flex align="flex-end" gap="xs" wrap="nowrap">
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
