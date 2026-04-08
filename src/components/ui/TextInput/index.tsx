import {
    TextInput as MantineTextInput,
    TextInputProps as MantineTextInputProps
} from '@mantine/core';
import { ReactNode } from 'react';

import Icon, { TablerIconKeys } from '../Icon';
import Label from '../Label';
import classes from './TextInput.module.css';

export interface TextInputProps extends MantineTextInputProps {
    icon?: ReactNode | TablerIconKeys;
    readOnly?: boolean;
    tooltip?: string;
}

const TextInput = ({
    icon,
    label,
    readOnly,
    tooltip,
    variant = 'default',
    ...props
}: TextInputProps) => {
    return (
        <MantineTextInput
            classNames={{
                input: classes.textInput,
                required: classes.textInputRequired
            }}
            data-readonly={readOnly}
            data-variant={variant}
            icon={
                typeof icon === 'string' ? (
                    <Icon type={icon as TablerIconKeys} />
                ) : (
                    icon
                )
            }
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            readOnly={readOnly}
            variant={readOnly ? 'unstyled' : variant}
            {...props}
        />
    );
};

export default TextInput;
