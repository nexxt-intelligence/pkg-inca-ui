import {
    ComboboxItem,
    ComboboxParsedItem,
    ComboboxRenderPillInput,
    getParsedComboboxData,
    Loader,
    MultiSelect as MantineMultiSelect,
    MultiSelectProps as MantineMultiSelectProps,
    Pill
} from '@mantine/core';
import { type ReactNode, useMemo, useRef, useState } from 'react';

import { type StrictProps } from '../../../types/props';
import Label, { type LabelProps } from '../Label';
import classes from './MultiSelect.module.css';

export interface MultiSelectProps
    extends Omit<
        StrictProps<MantineMultiSelectProps>,
        'onOptionSubmit' | 'renderOption' | 'renderPill'
    > {
    creatable?: boolean;
    getCreateLabel?: (query: string) => ReactNode;
    loading?: boolean;
    nonRemovableValues?: string[];
    onCreate?: (query: string) => string;
    onCreateAction?: () => void;
    onOptionSubmit?: MantineMultiSelectProps['onOptionSubmit'];
    renderOption?: MantineMultiSelectProps['renderOption'];
    renderPill?: MantineMultiSelectProps['renderPill'];
    shouldCreate?: (query: string, items: ComboboxItem[]) => boolean;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
    withinPortal?: boolean;
}

const MultiSelect = ({
    clearable,
    comboboxProps,
    creatable,
    data = [],
    defaultValue,
    getCreateLabel,
    hidePickedOptions,
    label,
    loading,
    nonRemovableValues = [],
    onChange,
    onCreate,
    onCreateAction,
    onOptionSubmit,
    onSearchChange,
    readOnly,
    renderOption,
    renderPill,
    searchValue,
    shouldCreate,
    tooltip,
    tooltipProps,
    value,
    variant = 'default',
    withinPortal,
    ...props
}: MultiSelectProps) => {
    const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(
        defaultValue ?? []
    );
    const isCreateAction = !!onCreateAction && !creatable;
    const hasCreateOption = !!creatable || isCreateAction;
    const hasNonRemovableValues = nonRemovableValues.length > 0;
    const selectedValue = value ?? uncontrolledValue;
    const [uncontrolledSearchValue, setUncontrolledSearchValue] = useState('');
    const resolvedSearchValue = searchValue ?? uncontrolledSearchValue;
    const pendingCreateValue = useRef<null | string>(null);
    const pendingCreateActionValue = useRef<null | string>(null);
    const parsedData = useMemo(
        () => getParsedComboboxData<string>(data),
        [data]
    );

    const isNonRemovable = (item: string) => nonRemovableValues.includes(item);
    const orderValues = (items: string[]) => [
        ...nonRemovableValues.filter((item) => items.includes(item)),
        ...items.filter((item) => !isNonRemovable(item))
    ];
    const getItems = (items: ComboboxParsedItem[]) =>
        items.flatMap((item) => ('items' in item ? item.items : item));
    const defaultShouldCreate = (query: string, items: ComboboxItem[]) =>
        !!query &&
        !selectedValue.some(
            (item) => item.toLowerCase() === query.toLowerCase()
        ) &&
        !items.some(
            (item) =>
                item.value.toLowerCase() === query.toLowerCase() ||
                item.label.toLowerCase() === query.toLowerCase()
        );

    const handleChange = (nextValue: string[]) => {
        let resolvedNextValue = nextValue;

        if (pendingCreateActionValue.current) {
            resolvedNextValue = nextValue.filter(
                (item) => item !== pendingCreateActionValue.current
            );
            pendingCreateActionValue.current = null;
        }

        if (pendingCreateValue.current) {
            resolvedNextValue = nextValue.map((item) =>
                item === resolvedSearchValue
                    ? pendingCreateValue.current!
                    : item
            );
            pendingCreateValue.current = null;
        }

        const lockedValues = selectedValue.filter(
            (item) => isNonRemovable(item) && !resolvedNextValue.includes(item)
        );
        const resolvedValue = hasNonRemovableValues
            ? orderValues([...resolvedNextValue, ...lockedValues])
            : resolvedNextValue;

        if (value === undefined) {
            setUncontrolledValue(resolvedValue);
        }

        onChange?.(resolvedValue);
    };

    const handleSearchChange = (nextValue: string) => {
        if (searchValue === undefined) {
            setUncontrolledSearchValue(nextValue);
        }

        onSearchChange?.(nextValue);
    };

    const shouldRenderCreateOption =
        hasCreateOption &&
        !!resolvedSearchValue &&
        (isCreateAction ||
            (shouldCreate
                ? shouldCreate(resolvedSearchValue, getItems(parsedData))
                : defaultShouldCreate(
                      resolvedSearchValue,
                      getItems(parsedData)
                  )));

    const resolvedData =
        shouldRenderCreateOption && resolvedSearchValue
            ? [
                  ...data,
                  { label: resolvedSearchValue, value: resolvedSearchValue }
              ]
            : data;

    const handleOptionSubmit: MantineMultiSelectProps['onOptionSubmit'] = (
        nextValue
    ) => {
        if (shouldRenderCreateOption && nextValue === resolvedSearchValue) {
            if (isCreateAction) {
                pendingCreateActionValue.current = nextValue;
                onCreateAction();
                return;
            }

            pendingCreateValue.current = onCreate?.(nextValue) ?? nextValue;
        }

        onOptionSubmit?.(nextValue);
    };

    const handleRenderOption: MantineMultiSelectProps['renderOption'] = (
        item
    ) => {
        if (
            shouldRenderCreateOption &&
            item.option.value === resolvedSearchValue
        ) {
            return (
                getCreateLabel?.(item.option.value) ?? (
                    <>+ Add {item.option.value}</>
                )
            );
        }

        return renderOption?.(item) ?? item.option.label;
    };

    const handleRenderPill = hasNonRemovableValues
        ? ({
              disabled,
              onRemove,
              option,
              reorderProps,
              value
          }: ComboboxRenderPillInput<string>) => (
              <Pill
                  disabled={disabled}
                  onRemove={onRemove}
                  withRemoveButton={
                      !disabled && !readOnly && !isNonRemovable(value ?? '')
                  }
                  {...reorderProps}
              >
                  {option.label}
              </Pill>
          )
        : renderPill;
    const resolvedComboboxProps =
        withinPortal === undefined
            ? comboboxProps
            : { ...comboboxProps, withinPortal };

    return (
        <MantineMultiSelect
            classNames={{
                input: classes.multiSelectInput,
                inputField: classes.multiSelectSearchInput,
                option: classes.multiSelectOption,
                pillsList: classes.multiSelectValues
            }}
            clearable={
                clearable &&
                (!hasNonRemovableValues ||
                    selectedValue.some((item) => !isNonRemovable(item)))
            }
            comboboxProps={resolvedComboboxProps}
            data={resolvedData}
            defaultValue={defaultValue}
            hidePickedOptions={hidePickedOptions}
            label={
                label ? (
                    <Label
                        label={label}
                        tooltip={tooltip}
                        tooltipProps={tooltipProps}
                    />
                ) : null
            }
            onChange={hasNonRemovableValues ? handleChange : onChange}
            onOptionSubmit={
                hasCreateOption ? handleOptionSubmit : onOptionSubmit
            }
            onSearchChange={
                hasCreateOption ? handleSearchChange : onSearchChange
            }
            readOnly={readOnly}
            renderOption={hasCreateOption ? handleRenderOption : renderOption}
            renderPill={handleRenderPill}
            searchValue={hasCreateOption ? resolvedSearchValue : searchValue}
            value={hasNonRemovableValues ? orderValues(selectedValue) : value}
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

export default MultiSelect;
