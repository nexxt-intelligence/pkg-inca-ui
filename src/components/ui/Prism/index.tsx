import {
    Prism as MantinePrism,
    PrismProps as MantinePrismProps
} from '@mantine/prism';

import classes from './Prism.module.css';

const Prism = ({ ...props }: MantinePrismProps) => {
    return <MantinePrism classNames={{ code: classes.code }} {...props} />;
};
export type PrismProps = MantinePrismProps;
export default Prism;
