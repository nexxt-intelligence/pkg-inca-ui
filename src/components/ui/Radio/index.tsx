import {
    Radio as MantineRadio,
    RadioProps as MantineRadioProps,
    RadioGroupProps as MantineRadioGroupProps,
    Flex
} from '@mantine/core';
import Label from '../Label';
import classes from './Radio.module.css';

export interface RadioProps extends MantineRadioProps {
    value: string | number;
    disabled?: boolean;
}

export interface RadioGroupProps
    extends Omit<MantineRadioGroupProps, 'children'> {
    row?: boolean;
    options?: RadioProps[];
    children?: React.ReactNode;
    disabled?: boolean;
    tooltip?: string;
}

const Radio = ({ ...props }: RadioProps) => {
    return (
        <MantineRadio
            classNames={{
                label: classes.radioLabel,
                inner: classes.radioInner,
                radio: classes.radio,
                description: classes.radioDescription,
                error: classes.radioError
            }}
            {...props}
        />
    );
};

const RadioGroup = ({
    row = false,
    options,
    children,
    disabled,
    tooltip,
    label,
    ...props
}: RadioGroupProps) => {
    const radioOptions = options?.map(({ value, ...rest }) => (
        <Radio
            key={value}
            value={value}
            disabled={disabled || rest.disabled}
            {...rest}
        />
    ));
    return (
        <MantineRadio.Group
            inputWrapperOrder={['label', 'input', 'description', 'error']}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            {...props}
        >
            <Flex
                direction={row ? 'row' : 'column'}
                gap={row ? 'md' : 'xs'}
                pb="2xs"
            >
                {radioOptions ? radioOptions : children}
            </Flex>
        </MantineRadio.Group>
    );
};

Radio.Group = RadioGroup;

export default Radio;
