import {
    NumberInput as MantineNumberInput,
    NumberInputProps as MantineNumberInputProps
} from '@mantine/core';

import Icon, { TablerIconKeys } from '../Icon';
import Label from '../Label';
import classes from './NumberInput.module.css';

export interface NumberInputProps extends MantineNumberInputProps {
    icon?: TablerIconKeys;
    readOnly?: boolean;
    tooltip?: string;
}

const NumberInput = ({
    icon,
    label,
    readOnly,
    tooltip,
    variant = 'default',
    ...props
}: NumberInputProps) => {
    return (
        <MantineNumberInput
            classNames={{
                control: classes.numberInputControl,
                controlUp: classes.numberInputControlUp,
                input: classes.numberInput,
                required: classes.numberInputRequired
            }}
            data-readonly={readOnly}
            data-variant={variant}
            icon={typeof icon === 'string' ? <Icon type={icon} /> : icon}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            readOnly={readOnly}
            variant={readOnly ? 'unstyled' : variant}
            {...props}
        />
    );
};

export default NumberInput;
