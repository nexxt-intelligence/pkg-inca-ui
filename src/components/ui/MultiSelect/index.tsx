import {
    Loader,
    MultiSelect as MantineMultiSelect,
    MultiSelectProps as MantineMultiSelectProps
} from '@mantine/core';

import Label from '../Label';
import classes from './MultiSelect.module.css';

export interface MultiSelectProps extends MantineMultiSelectProps {
    loading?: boolean;
    tooltip?: string;
}

const MultiSelect = ({
    label,
    loading,
    tooltip,
    variant = 'default',
    withinPortal = true,
    ...props
}: MultiSelectProps) => {
    return (
        <MantineMultiSelect
            classNames={{
                input: classes.multiSelectInput,
                values: classes.multiSelectValues
            }}
            data-variant={variant}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            variant={variant}
            withinPortal={withinPortal}
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
