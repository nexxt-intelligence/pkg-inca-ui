import {
    SegmentedControl as MantineSegmentedControl,
    SegmentedControlProps as MantineSegmentedControlProps
} from '@mantine/core';
import classes from './SegmentedControl.module.css';

export type SegmentedControlProps = MantineSegmentedControlProps;

const SegmentedControl = ({ ...props }: SegmentedControlProps) => {
    return (
        <MantineSegmentedControl
            classNames={{ label: classes.segmentedControlLabel }}
            {...props}
        />
    );
};

export default SegmentedControl;
