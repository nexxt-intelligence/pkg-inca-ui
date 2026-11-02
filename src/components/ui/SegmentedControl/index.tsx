import {
    SegmentedControl as MantineSegmentedControl,
    SegmentedControlProps as MantineSegmentedControlProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';
import classes from './SegmentedControl.module.css';

export type SegmentedControlProps = StrictProps<MantineSegmentedControlProps>;

/**
 * Mantine [SegmentedControl](https://v6.mantine.dev/core/segmented-control/) with inca-ui label styling.
 */
const SegmentedControl = ({ ...props }: SegmentedControlProps) => {
    return (
        <MantineSegmentedControl
            classNames={{ label: classes.label }}
            {...props}
        />
    );
};

export default SegmentedControl;
