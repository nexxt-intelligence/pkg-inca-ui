import {
    Text as MantineText,
    TextProps as MantineTextProps
} from '@mantine/core';

const Text = ({ fw = 400, ...props }: MantineTextProps) => {
    return <MantineText fw={fw} {...props} />;
};

export default Text;
