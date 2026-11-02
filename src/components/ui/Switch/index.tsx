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
    checked: boolean;
    fullWidth?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
}

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
