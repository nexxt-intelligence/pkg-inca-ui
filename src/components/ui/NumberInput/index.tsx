import {
    NumberInput as MantineNumberInput,
    NumberInputProps as MantineNumberInputProps
} from '@mantine/core';
import Label from '../Label';
import Icon, { TablerIconKeys } from '../Icon';
import classes from './NumberInput.module.css';

export interface NumberInputProps extends MantineNumberInputProps {
    tooltip?: string;
    icon?: TablerIconKeys;
    readOnly?: boolean;
}

const NumberInput = ({
    label,
    tooltip,
    icon,
    variant = 'default',
    readOnly,
    ...props
}: NumberInputProps) => {
    return (
        <MantineNumberInput
            classNames={{
                input: classes.numberInput,
                required: classes.numberInputRequired
            }}
            icon={typeof icon === 'string' ? <Icon type={icon} /> : icon}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            data-variant={variant}
            variant={variant}
            readOnly={readOnly}
            data-readonly={readOnly}
            {...props}
        />
    );
};

export default NumberInput;
