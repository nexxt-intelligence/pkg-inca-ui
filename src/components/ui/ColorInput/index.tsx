import {
    ColorInput as MantineColorInput,
    ColorInputProps as MantineColorInputProps
} from '@mantine/core';

import Label, { type LabelProps } from '../Label';
import classes from './ColorInput.module.css';

export interface ColorInputProps extends MantineColorInputProps {
    leftFilledSection?: React.ReactNode;
    rightFilledSection?: React.ReactNode;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
}

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
