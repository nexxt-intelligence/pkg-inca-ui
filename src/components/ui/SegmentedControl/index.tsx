import {
    SegmentedControl as MantineSegmentedControl,
    SegmentedControlProps as MantineSegmentedControlProps
} from '@mantine/core';

export type SegmentedControlProps = MantineSegmentedControlProps;

const SegmentedControl = ({ ...props }: SegmentedControlProps) => {
    return <MantineSegmentedControl {...props} />;
};

export default SegmentedControl;
