import {
    Text as MantineText,
    TextProps as MantineTextProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';

export type TextProps = StrictProps<MantineTextProps>;

const Text = ({ fw = 400, ...props }: TextProps) => {
    return <MantineText fw={fw} {...props} />;
};

export default Text;
