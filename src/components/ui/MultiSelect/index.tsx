import {
    Loader,
    MultiSelect as MantineMultiSelect,
    MultiSelectProps as MantineMultiSelectProps
} from '@mantine/core';

import Label, { type LabelProps } from '../Label';
import classes from './MultiSelect.module.css';

export interface MultiSelectProps extends MantineMultiSelectProps {
    loading?: boolean;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
}

const MultiSelect = ({
    label,
    loading,
    readOnly,
    tooltip,
    tooltipProps,
    variant = 'default',
    withinPortal = true,
    ...props
}: MultiSelectProps) => {
    return (
        <MantineMultiSelect
            classNames={{
                input: classes.multiSelectInput,
                searchInput: classes.multiSelectSearchInput,
                values: classes.multiSelectValues
            }}
            data-readonly={readOnly}
            label={
                label ? (
                    <Label
                        label={label}
                        tooltip={tooltip}
                        tooltipProps={tooltipProps}
                    />
                ) : null
            }
            readOnly={readOnly}
            variant={readOnly ? 'unstyled' : variant}
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
