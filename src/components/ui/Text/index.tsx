import {
    Text as MantineText,
    TextProps as MantineTextProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';

export type TextProps = StrictProps<MantineTextProps>;

/**
 * Mantine [Text](https://v6.mantine.dev/core/text/) with the default weight set to 400. Use `c="var(--text-…)"` for color.
 */
const Text = ({ fw = 400, ...props }: TextProps) => {
    return <MantineText fw={fw} {...props} />;
};

export default Text;
