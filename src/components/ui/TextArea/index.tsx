import {
    Textarea as MantineTextarea,
    TextareaProps as MantineTextareaProps
} from '@mantine/core';
import Label from '../Label';
import classes from './TextArea.module.css';

export interface TextAreaProps extends MantineTextareaProps {
    tooltip?: string;
    placeholder?: string;
    readOnly?: boolean;
}

const TextArea = ({
    label,
    tooltip,
    variant = 'default',
    minRows = 1,
    readOnly,
    autosize = true,
    ...props
}: TextAreaProps) => {
    return (
        <MantineTextarea
            classNames={{
                input: classes.textAreaInput,
                required: classes.textAreaInputRequired
            }}
            data-variant={variant}
            variant={variant}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            autosize={autosize}
            minRows={minRows}
            readOnly={readOnly}
            data-readonly={readOnly}
            {...props}
        />
    );
};

export default TextArea;
