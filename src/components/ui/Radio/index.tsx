import {
    Flex,
    Radio as MantineRadio,
    RadioGroupProps as MantineRadioGroupProps,
    RadioProps as MantineRadioProps
} from '@mantine/core';

import { type StrictInputProps, type StrictProps } from '../../../types/props';
import Label, { type LabelProps } from '../Label';
import classes from './Radio.module.css';

export interface RadioGroupProps
    extends Omit<StrictProps<MantineRadioGroupProps>, 'children'> {
    /** Custom radio elements. Ignored when `options` is set. */
    children?: React.ReactNode;
    /** Disables the radio (or every radio in the group). */
    disabled?: boolean;
    /** Radios to render. Use instead of `children`. */
    options?: RadioProps[];
    /** Lays the radios out in a row instead of a column. */
    row?: boolean;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
}

export interface RadioProps
    extends Omit<StrictInputProps<MantineRadioProps, 'size'>, 'value'> {
    /** Disables the radio (or every radio in the group). */
    disabled?: boolean;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
    /** Value used by `Radio.Group`. */
    value: number | string;
}

/**
 * Mantine [Radio](https://v6.mantine.dev/core/radio/) with inca-ui styling. Use `Radio.Group` for a list.
 */
const Radio = ({ label, tooltip, tooltipProps, ...props }: RadioProps) => {
    return (
        <MantineRadio
            classNames={{
                description: classes.description,
                error: classes.error,
                inner: classes.inner,
                label: classes.label,
                radio: classes.radio
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
 * Group of radios with a shared label. Pass `options` to render them from data and `row` to lay them out horizontally.
 */
const RadioGroup = ({
    children,
    disabled,
    label,
    options,
    row = false,
    tooltip,
    tooltipProps,
    ...props
}: RadioGroupProps) => {
    const radioOptions = options?.map(({ value, ...rest }) => (
        <Radio
            disabled={disabled || rest.disabled}
            key={value}
            value={value}
            {...rest}
        />
    ));
    return (
        <MantineRadio.Group
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
                {radioOptions ? radioOptions : children}
            </Flex>
        </MantineRadio.Group>
    );
};

Radio.Group = RadioGroup;

export default Radio;
