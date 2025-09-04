import {
    Loader,
    MultiSelect as MantineMultiSelect,
    MultiSelectProps as MantineMultiSelectProps
} from '@mantine/core';
import Label from '../Label';

export interface MultiSelectProps extends MantineMultiSelectProps {
    tooltip?: string;
    loading?: boolean;
}

const MultiSelect = ({
    tooltip,
    label,
    loading,
    ...props
}: MultiSelectProps) => {
    return (
        <MantineMultiSelect
            label={<Label label={label} tooltip={tooltip} />}
            {...props}
            {...(loading
                ? {
                      rightSection: <Loader size="xs" />
                  }
                : {})}
        />
    );
};

export default MultiSelect;
