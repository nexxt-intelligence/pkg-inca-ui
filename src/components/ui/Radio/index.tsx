import {
    Radio as MantineRadio,
    RadioProps as MantineRadioProps,
    RadioGroupProps as MantineRadioGroupProps,
    Flex
} from '@mantine/core';
import classes from './Radio.module.css';

export interface RadioProps extends MantineRadioProps {
    value: string | number;
}

export interface RadioGroupProps
    extends Omit<MantineRadioGroupProps, 'children'> {
    row?: boolean;
    options?: RadioProps[];
    children?: React.ReactNode;
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
    ...props
}: RadioGroupProps) => {
    const radioOptions = options?.map(({ value, ...rest }) => (
        <Radio key={value} value={value} {...rest} />
    ));
    return (
        <MantineRadio.Group
            inputWrapperOrder={['label', 'input', 'description', 'error']}
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
