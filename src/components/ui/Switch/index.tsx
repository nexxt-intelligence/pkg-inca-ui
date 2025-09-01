import {
    Switch as MantineSwitch,
    SwitchProps as MantineSwitchProps
} from '@mantine/core';
import Label from '../Label';
import classes from './Switch.module.css';

export interface SwitchProps extends MantineSwitchProps {
    checked: boolean;
    fullWidth?: boolean;
    tooltip?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({
    label,
    fullWidth = false,
    tooltip,
    ...props
}: SwitchProps) => {
    return (
        <MantineSwitch
            classNames={{
                body: fullWidth ? classes.fullWidthBody : '',
                track: classes.switchTrack,
                label: classes.switchLabel
            }}
            label={<Label label={label} tooltip={tooltip} />}
            {...props}
        />
    );
};

export default Switch;
