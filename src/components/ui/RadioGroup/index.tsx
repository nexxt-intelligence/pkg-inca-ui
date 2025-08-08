import {
    Radio as MantineRadio,
    RadioProps as MantineRadioProps,
    RadioGroupProps as MantineRadioGroupProps,
    Flex,
    Stack
} from '@mantine/core';
import classes from './RadioGroup.module.css';
import cx from 'classnames';
export interface RadioGroupProps
    extends Omit<MantineRadioGroupProps, 'children'> {
    options: (MantineRadioProps & { children?: React.ReactNode })[];
    row?: boolean;
}

const RadioGroup = ({
    disabled: groupDisabled,
    label,
    onChange,
    options,
    row = false,
    size = 'sm',
    value,
    ...props
}: RadioGroupProps) => {
    return (
        <MantineRadio.Group
            classNames={{
                label: cx(
                    classes.radioGroupLabel,
                    groupDisabled ? classes.radioGroupLabelDisabled : ''
                ),
                root: classes.radioGroupRoot
            }}
            disabled={groupDisabled}
            label={label}
            labelProps={{
                fw: 400
            }}
            onChange={onChange}
            value={String(value)}
            {...props}
        >
            <Flex direction={row ? 'row' : 'column'} gap={row ? 'md' : 'xs'}>
                {options.map(
                    ({ label, value, description, disabled, children }) => {
                        return (
                            <>
                                <MantineRadio
                                    classNames={{
                                        body: classes.radioBody,
                                        label: classes.radioLabel,
                                        radio: classes.radio,
                                        inner: classes.radioInner,
                                        description: classes.radioDescription
                                    }}
                                    description={description}
                                    disabled={groupDisabled || disabled}
                                    key={value}
                                    label={label}
                                    size={size}
                                    value={String(value)}
                                />
                                {children && <Stack pl="xl">{children}</Stack>}
                            </>
                        );
                    }
                )}
            </Flex>
        </MantineRadio.Group>
    );
};

export default RadioGroup;
