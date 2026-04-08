import {
    ColorInput as MantineColorInput,
    ColorInputProps as MantineColorInputProps
} from '@mantine/core';

import Label from '../Label';
import classes from './ColorInput.module.css';

export interface ColorInputProps extends MantineColorInputProps {
    leftFilledSection?: React.ReactNode;
    rightFilledSection?: React.ReactNode;
    tooltip?: string;
}

const ColorInput = ({
    label,
    tooltip,
    variant = 'default',
    ...props
}: ColorInputProps) => {
    return (
        <MantineColorInput
            classNames={{
                rightSection: classes.rightSection
            }}
            data-variant={variant}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            variant={variant}
            {...props}
        />
    );
};

export default ColorInput;
