import {
    Loader,
    MultiSelect as MantineMultiSelect,
    MultiSelectProps as MantineMultiSelectProps,
    MultiSelectValueProps as MantineMultiSelectValueProps,
    SelectItem as MantineSelectItem
} from '@mantine/core';
import { useState } from 'react';

import { type StrictProps } from '../../../types/props';
import CloseButton from '../CloseButton';
import Label, { type LabelProps } from '../Label';
import classes from './MultiSelect.module.css';

export interface MultiSelectProps extends StrictProps<MantineMultiSelectProps> {
    /** Shows a loader on the right side. */
    loading?: boolean;
    /** Selected values that can't be removed. They are always shown first. */
    nonRemovableValues?: string[];
    /** Shows an "add" option that calls this instead of creating a value (e.g. to open a modal). */
    onCreateAction?: () => void;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
}

const defaultShouldCreate = (query: string, items: MantineSelectItem[]) =>
    !!query &&
    !items.some((item) => item.value.toLowerCase() === query.toLowerCase());

const lower = (value: string) => value.toLowerCase();

/**
 * Mantine [MultiSelect](https://v6.mantine.dev/core/multi-select/) with a help tooltip, a loading state, values that can't be removed and an "add" option (`creatable` or `onCreateAction`).
 */
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
        <span className={classes.createLabel}>
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
        <div className={classes.value} data-disabled={disabled || undefined}>
            <span className={classes.valueLabel}>{label}</span>
            {!disabled && !readOnly && !isNonRemovable(value) && (
                <CloseButton
                    className={classes.valueRemove}
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
                input: classes.input,
                searchInput: classes.searchInput,
                values: classes.values
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
