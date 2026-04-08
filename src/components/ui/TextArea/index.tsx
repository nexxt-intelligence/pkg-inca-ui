import {
    Textarea as MantineTextarea,
    TextareaProps as MantineTextareaProps
} from '@mantine/core';

import Label from '../Label';
import classes from './TextArea.module.css';

export interface TextAreaProps extends MantineTextareaProps {
    placeholder?: string;
    readOnly?: boolean;
    tooltip?: string;
}

const TextArea = ({
    autosize = true,
    label,
    minRows = 1,
    readOnly,
    rightSection,
    rightSectionWidth,
    tooltip,
    variant = 'default',
    ...props
}: TextAreaProps) => {
    return (
        <MantineTextarea
            autosize={autosize}
            classNames={{
                input: classes.textAreaInput,
                required: classes.textAreaInputRequired
            }}
            data-readonly={readOnly}
            data-variant={variant}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            minRows={minRows}
            readOnly={readOnly}
            rightSection={rightSection}
            rightSectionWidth={rightSectionWidth}
            styles={
                rightSection
                    ? {
                          input: {
                              paddingRight: rightSectionWidth
                                  ? `calc(${rightSectionWidth}px + 16px)`
                                  : 36
                          }
                      }
                    : undefined
            }
            variant={variant}
            {...props}
        />
    );
};

export default TextArea;
