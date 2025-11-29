import {
    TextInput as MantineTextInput,
    TextInputProps as MantineTextInputProps
} from '@mantine/core';
import Label from '../Label';
import Icon, { TablerIconKeys } from '../Icon';
import classes from './TextInput.module.css';
import { ReactNode } from 'react';

export interface TextInputProps extends MantineTextInputProps {
    tooltip?: string;
    icon?: TablerIconKeys | ReactNode;
    readOnly?: boolean;
}

const TextInput = ({
    label,
    tooltip,
    icon,
    variant = 'default',
    readOnly,
    ...props
}: TextInputProps) => {
    return (
        <MantineTextInput
            classNames={{
                input: classes.textInput,
                required: classes.textInputRequired
            }}
            icon={
                typeof icon === 'string' ? (
                    <Icon type={icon as TablerIconKeys} />
                ) : (
                    icon
                )
            }
            data-variant={variant}
            variant={variant}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            readOnly={readOnly}
            data-readonly={readOnly}
            {...props}
        />
    );
};

export default TextInput;
