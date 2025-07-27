import {
    TextInput as MantineTextInput,
    NumberInput as MantineNumberInput,
    PasswordInput as MantinePasswordInput,
    TextInputProps,
    NumberInputProps,
    PasswordInputProps
} from '@mantine/core';
import Tooltip from '../Tooltip';
import classes from './Input.module.css';
import Icon from '../Icon';

export interface InputProps {
    tooltip?: string;
    multilineTooltip?: boolean;
    leftFilledSection?: React.ReactNode;
    rightFilledSection?: React.ReactNode;
    variant?: string;
}

const Input = ({
    label,
    tooltip,
    multilineTooltip,
    icon,
    leftFilledSection,
    rightFilledSection,
    rightSection,
    type = 'text',
    variant = 'default',
    ...props
}: InputProps & TextInputProps) => {
    const commonProps = {
        classNames: {
            rightSection: rightFilledSection ? classes.rightFilledSection : '',
            icon: leftFilledSection ? classes.leftFilledSection : '',
            label: classes.inputLabel,
            input: classes.input,
            wrapper: classes.inputWrapper,
            description: classes.description,
            error: classes.error
        },
        label: tooltip ? (
            <span className={classes.tooltipIcon}>
                {label}
                <Tooltip label={tooltip} multiline={multilineTooltip}>
                    <Icon type="IconHelpCircleFilled" size="md" />
                </Tooltip>
            </span>
        ) : (
            label
        ),
        labelProps: {
            fw: 400
        },
        'data-left-section': Boolean(leftFilledSection),
        'data-right-section': Boolean(rightFilledSection),
        icon: leftFilledSection || icon,
        rightSection: rightFilledSection || rightSection,
        ...props
    };

    switch (type) {
        case 'number':
            return (
                <MantineNumberInput
                    {...(commonProps as NumberInputProps)}
                    data-variant={variant}
                />
            );
        case 'password':
            return (
                <MantinePasswordInput
                    {...(commonProps as PasswordInputProps)}
                    data-variant={variant}
                />
            );
        default:
            return (
                <MantineTextInput
                    {...(commonProps as TextInputProps)}
                    data-variant={variant}
                />
            );
    }
};

export default Input;
