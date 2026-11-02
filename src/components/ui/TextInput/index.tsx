import {
    Flex,
    TextInput as MantineTextInput,
    TextInputProps as MantineTextInputProps
} from '@mantine/core';
import { ReactNode } from 'react';

import { type StrictInputProps } from '../../../types/props';
import Icon, { TablerIconKeys } from '../Icon';
import Label, { type LabelProps } from '../Label';
import Text from '../Text';
import classes from './TextInput.module.css';

export interface TextInputProps
    extends Omit<StrictInputProps<MantineTextInputProps, 'size'>, 'prefix'> {
    /** Icon on the left of the input: a Tabler icon name, e.g. `"IconSearch"` or `"IconMail"`, or a React node. */
    icon?: ReactNode | TablerIconKeys;
    /** Text shown in a gray box before the input (e.g. `https://`). */
    prefix?: ReactNode;
    /** Shows the value but prevents editing. */
    readOnly?: boolean;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
}

/**
 * Mantine [TextInput](https://v6.mantine.dev/core/text-input/) with a help tooltip, a Tabler icon name for `icon`, a `prefix` box and a read-only state.
 */
const TextInput = ({
    icon,
    label,
    prefix,
    readOnly,
    tooltip,
    tooltipProps,
    variant = 'default',
    ...props
}: TextInputProps) => {
    return (
        <MantineTextInput
            classNames={{
                input: classes.input,
                required: classes.required,
                wrapper: prefix ? classes.wrapper : undefined
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
            inputContainer={
                prefix
                    ? (children: ReactNode) => (
                          <Flex gap="2xs" wrap="nowrap">
                              <div className={classes.prefix}>
                                  <Text c="var(--text-disabled)" size="sm">
                                      {prefix}
                                  </Text>
                              </div>

                              {children}
                          </Flex>
                      )
                    : undefined
            }
            label={
                label ? (
                    <Label
                        label={label}
                        tooltip={tooltip}
                        tooltipProps={tooltipProps}
                    />
                ) : null
            }
            readOnly={readOnly}
            variant={variant}
            {...props}
        />
    );
};

export default TextInput;
