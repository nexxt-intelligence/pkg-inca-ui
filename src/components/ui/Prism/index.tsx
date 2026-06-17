import {
    Prism as MantinePrism,
    PrismProps as MantinePrismProps
} from '@mantine/prism';

import { type StrictProps } from '../../../types/props';
import classes from './Prism.module.css';

export type PrismProps = StrictProps<MantinePrismProps>;

const Prism = ({ ...props }: PrismProps) => {
    return <MantinePrism classNames={{ code: classes.code }} {...props} />;
};
export default Prism;
