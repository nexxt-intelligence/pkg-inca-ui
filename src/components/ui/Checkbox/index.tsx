import {
    Checkbox as MantineCheckbox,
    CheckboxProps as MantineCheckboxProps,
    CheckboxGroupProps as MantineCheckboxGroupProps,
    Group
} from '@mantine/core';
import classes from './Checkbox.module.css';

export interface CheckboxProps extends MantineCheckboxProps {
    value: string;
}

export interface CheckboxGroupProps
    extends Omit<MantineCheckboxGroupProps, 'children'> {
    row?: boolean;
    options: { label: string; value: string; description?: string }[];
}

const Checkbox = ({ size = 'xs', value, label, ...props }: CheckboxProps) => {
    return (
        <MantineCheckbox
            label={label}
            value={value}
            className={classes.container}
            size={size}
            labelProps={{
                fw: 400
            }}
            {...props}
            classNames={{
                input: classes.checkboxInput
            }}
        />
    );
};

const CheckboxGroup = ({
    label,
    value,
    onChange,
    size = 'xs',
    row = false,
    options,
    ...props
}: CheckboxGroupProps) => {
    const checkboxOptions = options.map(({ label, value, description }) => (
        <Checkbox
            key={value}
            label={label}
            value={value}
            description={description}
        />
    ));
    return (
        <MantineCheckbox.Group
            label={label}
            value={value}
            onChange={onChange}
            size={size}
            {...props}
            classNames={{
                label: classes.checkboxLabel
            }}
        >
            {row ? <Group>{checkboxOptions}</Group> : checkboxOptions}
        </MantineCheckbox.Group>
    );
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
