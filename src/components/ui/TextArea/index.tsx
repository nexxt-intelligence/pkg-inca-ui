import {
    Textarea as MantineTextarea,
    TextareaProps as MantineTextareaProps
} from '@mantine/core';

import { type StrictTextareaProps } from '../../../types/props';
import Label, { type LabelProps } from '../Label';
import classes from './TextArea.module.css';

export interface TextAreaProps
    extends StrictTextareaProps<MantineTextareaProps> {
    /** Text shown while the field is empty. */
    placeholder?: string;
    /** Shows the value but prevents editing. */
    readOnly?: boolean;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
}

/**
 * Mantine [Textarea](https://v6.mantine.dev/core/textarea/) that grows with its content, with a help tooltip and a read-only state.
 */
const TextArea = ({
    autosize = true,
    label,
    minRows = 1,
    readOnly,
    rightSection,
    rightSectionWidth,
    tooltip,
    tooltipProps,
    variant = 'default',
    ...props
}: TextAreaProps) => {
    return (
        <MantineTextarea
            autosize={autosize}
            classNames={{
                input: classes.input,
                required: classes.required
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
            minRows={minRows}
            readOnly={readOnly}
            rightSection={rightSection}
            rightSectionWidth={rightSectionWidth}
            styles={
                rightSection
                    ? {
                          input: {
                              paddingRight: rightSectionWidth
                                  ? `calc(${rightSectionWidth}px + var(--spacing-md))`
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
