import {
    Flex,
    TextInput as MantineTextInput,
    TextInputProps as MantineTextInputProps
} from '@mantine/core';
import { ReactNode } from 'react';

import Icon, { TablerIconKeys } from '../Icon';
import Label from '../Label';
import Text from '../Text';
import classes from './TextInput.module.css';

export interface TextInputProps extends MantineTextInputProps {
    icon?: ReactNode | TablerIconKeys;
    prefix?: ReactNode;
    readOnly?: boolean;
    tooltip?: string;
}

const TextInput = ({
    icon,
    label,
    prefix,
    readOnly,
    tooltip,
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
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            readOnly={readOnly}
            variant={readOnly ? 'unstyled' : variant}
            {...props}
        />
    );
};

export default TextInput;
