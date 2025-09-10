import {
    ColorInput as MantineColorInput,
    ColorInputProps as MantineColorInputProps
} from '@mantine/core';
import Label from '../Label';
// import classes from './ColorInput.module.css';

export interface ColorInputProps extends MantineColorInputProps {
    tooltip?: string;
    leftFilledSection?: React.ReactNode;
    rightFilledSection?: React.ReactNode;
}

const ColorInput = ({ label, tooltip, ...props }: ColorInputProps) => {
    return (
        <MantineColorInput
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            {...props}
        />
    );
};

export default ColorInput;
