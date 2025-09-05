import {
    TextInput as MantineTextInput,
    TextInputProps as MantineTextInputProps
} from '@mantine/core';
import Label from '../Label';
import Icon, { TablerIconKeys } from '../Icon';
import classes from './TextInput.module.css';

export interface TextInputProps extends MantineTextInputProps {
    tooltip?: string;
    icon?: TablerIconKeys;
}

const TextInput = ({
    label,
    tooltip,
    icon,
    variant = 'default',
    ...props
}: TextInputProps) => {
    return (
        <MantineTextInput
            classNames={{
                input: classes.textInput,
                required: classes.textInputRequired
            }}
            icon={typeof icon === 'string' ? <Icon type={icon} /> : icon}
            data-variant={variant}
            variant={variant}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            {...props}
        />
    );
};

export default TextInput;
