import {
    NumberInput as MantineNumberInput,
    NumberInputProps as MantineNumberInputProps
} from '@mantine/core';
import Label from '../Label';
import Icon, { TablerIconKeys } from '../Icon';
// import classes from './NumberInput.module.css';

export interface NumberInputProps extends MantineNumberInputProps {
    tooltip?: string;
    icon?: TablerIconKeys;
}

const NumberInput = ({
    label,
    tooltip,
    icon,
    variant = 'default',
    ...props
}: NumberInputProps) => {
    return (
        <MantineNumberInput
            icon={typeof icon === 'string' ? <Icon type={icon} /> : icon}
            data-variant={variant}
            variant={variant}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            {...props}
        />
    );
};

export default NumberInput;
