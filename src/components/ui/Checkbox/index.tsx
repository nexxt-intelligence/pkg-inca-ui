import {
    Flex,
    Checkbox as MantineCheckbox,
    CheckboxGroupProps as MantineCheckboxGroupProps,
    CheckboxProps as MantineCheckboxProps
} from '@mantine/core';

import { type StrictInputProps, type StrictProps } from '../../../types/props';
import Label, { type LabelProps } from '../Label';
import classes from './Checkbox.module.css';

export interface CheckboxGroupProps
    extends Omit<StrictProps<MantineCheckboxGroupProps>, 'children'> {
    /** Custom checkbox elements. Ignored when `options` is set. */
    children?: React.ReactNode;
    /** Disables every checkbox in the group. */
    disabled?: boolean;
    /** Checkboxes to render. Use instead of `children`. */
    options?: CheckboxProps[];
    /** Lays the checkboxes out in a row instead of a column. */
    row?: boolean;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
}

export interface CheckboxProps
    extends Omit<
        StrictInputProps<MantineCheckboxProps, 'size' | 'type'>,
        'value'
    > {
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
    /** Value used by `Checkbox.Group`. */
    value: number | string;
}

/**
 * Mantine [Checkbox](https://v6.mantine.dev/core/checkbox/) with inca-ui styling. Use `Checkbox.Group` for a list.
 */
const Checkbox = ({
    label,
    tooltip,
    tooltipProps,
    ...props
}: CheckboxProps) => {
    return (
        <MantineCheckbox
            classNames={{
                description: classes.description,
                error: classes.error,
                inner: classes.inner,
                input: classes.input,
                label: classes.label
            }}
            label={
                label ? (
                    <Label
                        label={label}
                        tooltip={tooltip}
                        tooltipProps={tooltipProps}
                    />
                ) : null
            }
            {...props}
        />
    );
};

/**
 * Group of checkboxes with a shared label. Pass `options` to render them from data and `row` to lay them out horizontally.
 */
const CheckboxGroup = ({
    children,
    disabled,
    label,
    options,
    row = false,
    tooltip,
    tooltipProps,
    ...props
}: CheckboxGroupProps) => {
    const checkboxOptions = options?.map(({ value, ...rest }) => (
        <Checkbox disabled={disabled} key={value} value={value} {...rest} />
    ));
    return (
        <MantineCheckbox.Group
            label={
                label ? (
                    <Label
                        label={label}
                        tooltip={tooltip}
                        tooltipProps={tooltipProps}
                    />
                ) : null
            }
            {...props}
        >
            <Flex
                direction={row ? 'row' : 'column'}
                gap={row ? 'md' : 'xs'}
                pb="2xs"
            >
                {checkboxOptions ? checkboxOptions : children}
            </Flex>
        </MantineCheckbox.Group>
    );
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
