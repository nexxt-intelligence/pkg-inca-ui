import {
    NumberInput as MantineNumberInput,
    PasswordInput as MantinePasswordInput,
    TextInput as MantineTextInput,
    NumberInputProps,
    PasswordInputProps,
    TextInputProps
} from '@mantine/core';

import Icon from '../ui/Icon';
import Tooltip from '../ui/Tooltip';
import classes from './Input.module.css';

export interface InputProps {
    leftFilledSection?: React.ReactNode;
    multilineTooltip?: boolean;
    rightFilledSection?: React.ReactNode;
    tooltip?: string;
    variant?: string;
}

const Input = ({
    icon,
    label,
    leftFilledSection,
    multilineTooltip,
    rightFilledSection,
    rightSection,
    tooltip,
    type = 'text',
    variant = 'default',
    ...props
}: InputProps & TextInputProps) => {
    const commonProps = {
        classNames: {
            description: classes.description,
            error: classes.error,
            icon: leftFilledSection ? classes.leftFilledSection : '',
            input: classes.input,
            label: classes.inputLabel,
            rightSection: rightFilledSection ? classes.rightFilledSection : '',
            wrapper: classes.inputWrapper
        },
        'data-left-section': Boolean(leftFilledSection),
        'data-right-section': Boolean(rightFilledSection),
        icon: leftFilledSection || icon,
        label: tooltip ? (
            <span className={classes.tooltipIcon}>
                {label}
                <Tooltip label={tooltip} multiline={multilineTooltip}>
                    <Icon size="md" type="IconHelpCircleFilled" />
                </Tooltip>
            </span>
        ) : (
            label
        ),
        labelProps: {
            fw: 400
        },
        rightSection: rightFilledSection || rightSection,
        ...props
    };

    switch (type) {
        case 'number':
            return (
                <MantineNumberInput
                    {...(commonProps as unknown as NumberInputProps)}
                    data-variant={variant}
                />
            );
        case 'password':
            return (
                <MantinePasswordInput
                    {...(commonProps as unknown as PasswordInputProps)}
                    data-variant={variant}
                />
            );
        default:
            return (
                <MantineTextInput
                    {...(commonProps as unknown as TextInputProps)}
                    data-variant={variant}
                />
            );
    }
};

export default Input;
