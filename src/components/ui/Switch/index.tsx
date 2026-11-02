import {
    Switch as MantineSwitch,
    SwitchProps as MantineSwitchProps
} from '@mantine/core';

import { type StrictInputProps } from '../../../types/props';
import Label, { type LabelProps } from '../Label';
import classes from './Switch.module.css';

export interface SwitchProps
    extends Omit<
        StrictInputProps<MantineSwitchProps, 'size' | 'type'>,
        'checked' | 'onChange'
    > {
    /** Whether the switch is on. */
    checked: boolean;
    /** Pushes the label and the switch to opposite ends of the row. */
    fullWidth?: boolean;
    /** Called when the switch is toggled. */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
}

/**
 * Mantine [Switch](https://v6.mantine.dev/core/switch/) with a help tooltip and a `fullWidth` layout.
 */
const Switch = ({
    fullWidth = false,
    label,
    tooltip,
    tooltipProps,
    ...props
}: SwitchProps) => {
    return (
        <MantineSwitch
            classNames={{
                body: fullWidth ? classes.bodyFullWidth : undefined,
                description: classes.description,
                error: classes.error,
                label: classes.label,
                track: classes.track
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

export default Switch;
