import {
    SegmentedControl as MantineSegmentedControl,
    SegmentedControlProps as MantineSegmentedControlProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';
import classes from './SegmentedControl.module.css';

export type SegmentedControlProps = StrictProps<MantineSegmentedControlProps>;

const SegmentedControl = ({ ...props }: SegmentedControlProps) => {
    return (
        <MantineSegmentedControl
            classNames={{ label: classes.segmentedControlLabel }}
            {...props}
        />
    );
};

export default SegmentedControl;
