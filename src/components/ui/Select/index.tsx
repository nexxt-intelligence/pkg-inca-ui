import {
    ComboboxItem,
    Loader,
    Select as MantineSelect,
    SelectProps as MantineSelectProps
} from '@mantine/core';
import { type ReactNode } from 'react';

import { type StrictProps } from '../../../types/props';
import Icon, { TablerIconKeys } from '../Icon';
import Label, { type LabelProps } from '../Label';
import classes from './Select.module.css';

export interface SelectProps
    extends Omit<
        StrictProps<MantineSelectProps>,
        'comboboxProps' | 'leftSection' | 'onOptionSubmit' | 'renderOption'
    > {
    creatable?: boolean;
    getCreateLabel?: (query: string) => ReactNode;
    icon?: TablerIconKeys;
    loading?: boolean;
    onCreate?: (query: string) => string;
    onCreateAction?: () => void;
    onOptionSubmit?: MantineSelectProps['onOptionSubmit'];
    renderOption?: MantineSelectProps['renderOption'];
    shouldCreate?: (query: string, items: ComboboxItem[]) => boolean;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
    withinPortal?: boolean;
}

const Select = ({
    creatable,
    data = [],
    getCreateLabel,
    icon,
    label,
    loading,
    onCreate,
    onCreateAction,
    onOptionSubmit,
    readOnly,
    renderOption,
    shouldCreate,
    tooltip,
    tooltipProps,
    variant = 'default',
    withinPortal = true,
    ...props
}: SelectProps) => {
    const isCreateAction = !!onCreateAction && !creatable;
    const hasCreatable = !!creatable || isCreateAction;

    const handleOptionSubmit: MantineSelectProps['onOptionSubmit'] = (
        value
    ) => {
        if (hasCreatable && value === props.searchValue) {
            if (isCreateAction) {
                onCreateAction();
                return;
            }

            onCreate?.(value);
        }

        onOptionSubmit?.(value);
    };

    const handleRenderOption: MantineSelectProps['renderOption'] = (item) => {
        if (hasCreatable && item.option.value === props.searchValue) {
            return (
                <span className={classes.selectCreateLabel}>
                    {getCreateLabel?.(item.option.value) ??
                        `+ Add ${item.option.value}`}
                </span>
            );
        }

        return renderOption?.(item) ?? item.option.label;
    };

    const shouldRenderCreateOption =
        hasCreatable &&
        !!props.searchValue &&
        (isCreateAction ||
            shouldCreate?.(props.searchValue, [] as ComboboxItem[]) !== false);

    const resolvedData =
        shouldRenderCreateOption && props.searchValue
            ? [...data, { label: props.searchValue, value: props.searchValue }]
            : data;

    const handleCreateAction = () => {
        if (isCreateAction && props.searchValue) {
            onCreateAction();
        }
    };

    return (
        <MantineSelect
            classNames={{
                input: classes.selectInput
            }}
            comboboxProps={{ withinPortal }}
            data={resolvedData}
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
            leftSection={typeof icon === 'string' ? <Icon type={icon} /> : icon}
            onClick={handleCreateAction}
            onOptionSubmit={handleOptionSubmit}
            readOnly={readOnly}
            renderOption={handleRenderOption}
            variant={variant}
            {...props}
            {...(loading
                ? {
                      rightSection: <Loader size="xs" />
                  }
                : {})}
        />
    );
};

export default Select;
