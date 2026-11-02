import {
    Prism as MantinePrism,
    PrismProps as MantinePrismProps
} from '@mantine/prism';

import { type StrictProps } from '../../../types/props';
import classes from './Prism.module.css';

export type PrismProps = StrictProps<MantinePrismProps>;

/**
 * Code block with syntax highlighting and a copy button.
 * Mantine [Prism](https://v6.mantine.dev/others/prism/) with the inca-ui monospace font.
 */
const Prism = ({ ...props }: PrismProps) => {
    return <MantinePrism classNames={{ code: classes.code }} {...props} />;
};
export default Prism;
