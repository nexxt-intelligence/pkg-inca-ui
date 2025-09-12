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
    variant = 'default',
    ...props
}: MultiSelectProps) => {
    return (
        <MantineMultiSelect
            classNames={{
                values: classes.multiSelectValues
            }}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            variant={variant}
            data-variant={variant}
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
