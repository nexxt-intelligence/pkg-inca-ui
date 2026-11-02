import {
    NumberInput as MantineNumberInput,
    NumberInputProps as MantineNumberInputProps
} from '@mantine/core';

import { type StrictInputProps } from '../../../types/props';
import Icon, { TablerIconKeys } from '../Icon';
import Label, { type LabelProps } from '../Label';
import classes from './NumberInput.module.css';

export interface NumberInputProps
    extends StrictInputProps<
        MantineNumberInputProps,
        'classNames' | 'onChange' | 'size' | 'styles' | 'type' | 'value'
    > {
    /** Tabler icon name shown on the left of the input, e.g. `"IconCurrencyDollar"`. */
    icon?: TablerIconKeys;
    /** Shows the value but prevents editing. */
    readOnly?: boolean;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
}

/**
 * Mantine [NumberInput](https://v6.mantine.dev/core/number-input/) with a help tooltip and a read-only state.
 */
const NumberInput = ({
    icon,
    label,
    readOnly,
    tooltip,
    tooltipProps,
    variant = 'default',
    ...props
}: NumberInputProps) => {
    return (
        <MantineNumberInput
            classNames={{
                control: classes.control,
                controlUp: classes.controlUp,
                input: classes.input,
                required: classes.required
            }}
            data-readonly={readOnly}
            data-variant={variant}
            icon={typeof icon === 'string' ? <Icon type={icon} /> : icon}
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
            variant={variant}
            {...props}
        />
    );
};

export default NumberInput;
