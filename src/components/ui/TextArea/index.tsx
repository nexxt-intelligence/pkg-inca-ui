import {
    Textarea as MantineTextarea,
    TextareaProps as MantineTextareaProps
} from '@mantine/core';
import Label from '../Label';
import classes from './TextArea.module.css';

export interface TextAreaProps extends MantineTextareaProps {
    tooltip?: string;
    placeholder?: string;
}

const TextArea = ({
    label,
    tooltip,
    variant = 'default',
    minRows = 2,
    ...props
}: TextAreaProps) => {
    return (
        <MantineTextarea
            classNames={{
                input: classes.textAreaInput
            }}
            data-variant={variant}
            variant={variant}
            label={<Label label={label} tooltip={tooltip} />}
            minRows={minRows}
            {...props}
        />
    );
};

export default TextArea;
