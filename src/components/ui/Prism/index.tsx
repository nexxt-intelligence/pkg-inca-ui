import { Prism as MantinePrism, PrismProps } from '@mantine/prism';

import classes from './Prism.module.css';

const Prism = ({ ...props }: PrismProps) => {
    return <MantinePrism classNames={{ code: classes.code }} {...props} />;
};

export default Prism;
