import {
    Loader,
    MultiSelect as MantineMultiSelect,
    MultiSelectProps as MantineMultiSelectProps,
    MultiSelectValueProps as MantineMultiSelectValueProps,
    SelectItem as MantineSelectItem
} from '@mantine/core';
import { useState } from 'react';

import CloseButton from '../CloseButton';
import Label, { type LabelProps } from '../Label';
import classes from './MultiSelect.module.css';

export interface MultiSelectProps extends MantineMultiSelectProps {
    loading?: boolean;
    nonRemovableValues?: string[];
    onCreateAction?: () => void;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
}

const defaultShouldCreate = (query: string, items: MantineSelectItem[]) =>
    !!query &&
    !items.some((item) => item.value.toLowerCase() === query.toLowerCase());

const lower = (value: string) => value.toLowerCase();

const MultiSelect = ({
    clearable,
    creatable,
    data = [],
    defaultValue,
    getCreateLabel,
    hoverOnSearchChange,
    label,
    loading,
    nonRemovableValues = [],
    onChange,
    onCreate,
    onCreateAction,
    readOnly,
    shouldCreate,
    tooltip,
    tooltipProps,
    value,
    valueComponent,
    variant = 'default',
    withinPortal = true,
    ...props
}: MultiSelectProps) => {
    const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(
        defaultValue ?? []
    );
    const isCreateAction = !!onCreateAction && !creatable;
    const hasCreatable = !!creatable || isCreateAction;
    const hasNonRemovableValues = nonRemovableValues.length > 0;
    const isNonRemovable = (item: string) => nonRemovableValues.includes(item);
    const orderValues = (items: string[]) => [
        ...nonRemovableValues.filter((item) => items.includes(item)),
        ...items.filter((item) => !isNonRemovable(item))
    ];
    const selectedValue = hasNonRemovableValues
        ? orderValues(value ?? uncontrolledValue)
        : value ?? uncontrolledValue;
    const hasRemovableValue = selectedValue.some(
        (item) => !isNonRemovable(item)
    );

    const handleChange = (next: string[]) => {
        // Keep locked values selected when Mantine tries to remove them.
        const lockedValues = selectedValue.filter(
            (item) => isNonRemovable(item) && !next.includes(item)
        );
        const nextValue = hasNonRemovableValues
            ? orderValues([...next, ...lockedValues])
            : next;
        if (typeof value === 'undefined') {
            setUncontrolledValue(nextValue);
        }
        onChange?.(nextValue);
    };

    const handleCreate = (query: string) => {
        // Custom create is an action item for opening a modal, not a new value.
        if (isCreateAction) {
            onCreateAction();
            return null;
        }
        return onCreate?.(query) ?? query;
    };

    const handleCreateLabel = (query: string) => (
        <span className={classes.multiSelectCreateLabel}>
            {getCreateLabel?.(query) ?? `+ Add ${query}`}
        </span>
    );

    const handleShouldCreate = (query: string, items: MantineSelectItem[]) => {
        if (isCreateAction) return true;
        if (selectedValue.some((item) => lower(item) === lower(query)))
            return false;
        return shouldCreate
            ? shouldCreate(query, items)
            : defaultShouldCreate(query, items);
    };

    const ValueComponent = ({
        disabled,
        label,
        onRemove,
        readOnly,
        value
    }: { value: string } & MantineMultiSelectValueProps) => (
        <div
            className={classes.multiSelectValue}
            data-disabled={disabled || undefined}
        >
            <span className={classes.multiSelectValueLabel}>{label}</span>
            {!disabled && !readOnly && !isNonRemovable(value) && (
                <CloseButton
                    className={classes.multiSelectValueRemove}
                    iconSize="70%"
                    onMouseDown={onRemove}
                    tabIndex={-1}
                />
            )}
        </div>
    );

    return (
        <MantineMultiSelect
            classNames={{
                input: classes.multiSelectInput,
                searchInput: classes.multiSelectSearchInput,
                values: classes.multiSelectValues
            }}
            clearable={
                clearable && (!hasNonRemovableValues || hasRemovableValue)
            }
            creatable={hasCreatable}
            data={data}
            data-readonly={readOnly}
            defaultValue={defaultValue}
            getCreateLabel={handleCreateLabel}
            hoverOnSearchChange={creatable ? true : hoverOnSearchChange}
            label={
                label ? (
                    <Label
                        label={label}
                        tooltip={tooltip}
                        tooltipProps={tooltipProps}
                    />
                ) : null
            }
            onChange={handleChange}
            onCreate={hasCreatable ? handleCreate : onCreate}
            readOnly={readOnly}
            shouldCreate={handleShouldCreate}
            value={hasNonRemovableValues ? selectedValue : value}
            valueComponent={
                hasNonRemovableValues ? ValueComponent : valueComponent
            }
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
