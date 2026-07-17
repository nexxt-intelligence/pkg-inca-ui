import {
    Text as MantineText,
    TextProps as MantineTextProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';

export type TextProps = {
    align?: MantineTextProps['ta'];
    color?: MantineTextProps['c'];
} & Omit<StrictProps<MantineTextProps>, 'color'>;

const Text = ({ align, color, fw = 400, ...props }: TextProps) => {
    return <MantineText c={color} fw={fw} ta={align} {...props} />;
};

export default Text;
