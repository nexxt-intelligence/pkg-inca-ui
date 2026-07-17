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
    extends Omit<StrictInputProps<MantineTextInputProps>, 'prefix'> {
    icon?: ReactNode | TablerIconKeys;
    prefix?: ReactNode;
    readOnly?: boolean;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
}

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
                input: classes.textInput,
                required: classes.textInputRequired,
                wrapper: prefix ? classes.textInputWrapper : undefined
            }}
            data-readonly={readOnly}
            data-variant={variant}
            inputContainer={
                prefix
                    ? (children: ReactNode) => (
                          <Flex gap="2xs" wrap="nowrap">
                              <div className={classes.textInputPrefix}>
                                  <Text color="var(--text-disabled)" size="sm">
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
            leftSection={
                typeof icon === 'string' ? (
                    <Icon type={icon as TablerIconKeys} />
                ) : (
                    icon
                )
            }
            readOnly={readOnly}
            variant={variant}
            {...props}
        />
    );
};

export default TextInput;
