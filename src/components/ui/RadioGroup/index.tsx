import {
    Radio as MantineRadio,
    RadioProps as MantineRadioProps,
    RadioGroupProps as MantineRadioGroupProps,
    Group
} from '@mantine/core';
import classes from './RadioGroup.module.css';
import cx from 'classnames';
export interface RadioGroupProps
    extends Omit<MantineRadioGroupProps, 'children'> {
    options: MantineRadioProps[];
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
            <Group noWrap={row} spacing="md">
                {options.map(({ label, value, description, disabled }) => {
                    return (
                        <MantineRadio
                            classNames={{
                                body: classes.radioBody,
                                label: classes.radioLabel,
                                radio: classes.radio
                            }}
                            description={description}
                            disabled={groupDisabled || disabled}
                            key={value}
                            label={label}
                            size={size}
                            value={String(value)}
                        />
                    );
                })}
            </Group>
        </MantineRadio.Group>
    );
};

export default RadioGroup;
