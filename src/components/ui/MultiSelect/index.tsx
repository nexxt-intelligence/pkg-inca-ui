import {
    Loader,
    MultiSelect as MantineMultiSelect,
    MultiSelectProps as MantineMultiSelectProps
} from '@mantine/core';
import Label from '../Label';
import classes from './MultiSelect.module.css';

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
            classNames={{
                values: classes.multiSelectValues
            }}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
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
