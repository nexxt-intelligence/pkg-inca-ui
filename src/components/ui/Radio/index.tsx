import {
    Flex,
    Radio as MantineRadio,
    RadioGroupProps as MantineRadioGroupProps,
    RadioProps as MantineRadioProps
} from '@mantine/core';

import Label from '../Label';
import classes from './Radio.module.css';

export interface RadioGroupProps
    extends Omit<MantineRadioGroupProps, 'children'> {
    children?: React.ReactNode;
    disabled?: boolean;
    options?: RadioProps[];
    row?: boolean;
    tooltip?: string;
}

export interface RadioProps extends MantineRadioProps {
    disabled?: boolean;
    value: number | string;
}

const Radio = ({ ...props }: RadioProps) => {
    return (
        <MantineRadio
            classNames={{
                description: classes.radioDescription,
                error: classes.radioError,
                inner: classes.radioInner,
                label: classes.radioLabel,
                radio: classes.radio
            }}
            {...props}
        />
    );
};

const RadioGroup = ({
    children,
    disabled,
    label,
    options,
    row = false,
    tooltip,
    ...props
}: RadioGroupProps) => {
    const radioOptions = options?.map(({ value, ...rest }) => (
        <Radio
            disabled={disabled || rest.disabled}
            key={value}
            value={value}
            {...rest}
        />
    ));
    return (
        <MantineRadio.Group
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
