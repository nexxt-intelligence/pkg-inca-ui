import {
    Switch as MantineSwitch,
    SwitchProps as MantineSwitchProps
} from '@mantine/core';

import Label from '../Label';
import classes from './Switch.module.css';

export interface SwitchProps extends MantineSwitchProps {
    checked: boolean;
    fullWidth?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    tooltip?: string;
}

const Switch = ({
    fullWidth = false,
    label,
    tooltip,
    ...props
}: SwitchProps) => {
    return (
        <MantineSwitch
            classNames={{
                body: fullWidth ? classes.fullWidthBody : '',
                label: classes.switchLabel,
                track: classes.switchTrack
            }}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            {...props}
        />
    );
};

export default Switch;
