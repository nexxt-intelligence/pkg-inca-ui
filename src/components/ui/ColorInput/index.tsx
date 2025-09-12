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

const ColorInput = ({
    label,
    tooltip,
    variant = 'default',
    ...props
}: ColorInputProps) => {
    return (
        <MantineColorInput
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            variant={variant}
            data-variant={variant}
            {...props}
        />
    );
};

export default ColorInput;
