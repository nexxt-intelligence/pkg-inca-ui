import {
    NumberInput as MantineNumberInput,
    NumberInputProps as MantineNumberInputProps
} from '@mantine/core';

import { type StrictInputProps } from '../../../types/props';
import Icon, { TablerIconKeys } from '../Icon';
import Label, { type LabelProps } from '../Label';
import classes from './NumberInput.module.css';

export interface NumberInputProps
    extends StrictInputProps<MantineNumberInputProps> {
    icon?: TablerIconKeys;
    readOnly?: boolean;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
}

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
                control: classes.numberInputControl,
                input: classes.numberInput,
                required: classes.numberInputRequired
            }}
            data-readonly={readOnly}
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
            leftSection={typeof icon === 'string' ? <Icon type={icon} /> : icon}
            readOnly={readOnly}
            variant={variant}
            {...props}
        />
    );
};

export default NumberInput;
