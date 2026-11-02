import {
    ColorInput as MantineColorInput,
    ColorInputProps as MantineColorInputProps
} from '@mantine/core';

import { type StrictInputProps } from '../../../types/props';
import Label, { type LabelProps } from '../Label';
import classes from './ColorInput.module.css';

export interface ColorInputProps
    extends StrictInputProps<
        MantineColorInputProps,
        'defaultValue' | 'onChange' | 'size' | 'value'
    > {
    /** Content shown in a gray box attached to the left of the input. */
    leftFilledSection?: React.ReactNode;
    /** Content shown in a gray box attached to the right of the input. */
    rightFilledSection?: React.ReactNode;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
}

/**
 * Mantine [ColorInput](https://v6.mantine.dev/core/color-input/) with an optional help `tooltip` next to the label.
 */
const ColorInput = ({
    label,
    tooltip,
    tooltipProps,
    variant = 'default',
    ...props
}: ColorInputProps) => {
    return (
        <MantineColorInput
            classNames={{
                rightSection: classes.rightSection
            }}
            data-variant={variant}
            label={
                label ? (
                    <Label
                        label={label}
                        tooltip={tooltip}
                        tooltipProps={tooltipProps}
                    />
                ) : null
            }
            variant={variant}
            {...props}
        />
    );
};

export default ColorInput;
