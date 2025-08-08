import {
    Checkbox as MantineCheckbox,
    CheckboxProps as MantineCheckboxProps,
    CheckboxGroupProps as MantineCheckboxGroupProps,
    Flex,
    Stack
} from '@mantine/core';
import classes from './Checkbox.module.css';

export interface CheckboxProps extends MantineCheckboxProps {
    value: string;
    children?: React.ReactNode;
}

export interface CheckboxGroupProps
    extends Omit<MantineCheckboxGroupProps, 'children'> {
    row?: boolean;
    options: {
        label: string;
        value: string;
        description?: string;
        children?: React.ReactNode;
    }[];
}

const Checkbox = ({
    size = 'sm',
    value,
    label,
    children,
    ...props
}: CheckboxProps) => {
    return (
        <Stack spacing="xs">
            <MantineCheckbox
                label={label}
                value={value}
                className={classes.container}
                size={size}
                labelProps={{
                    fw: 400
                }}
                classNames={{
                    label: classes.checkboxLabel,
                    inner: classes.checkboxInner,
                    input: classes.checkboxInput,
                    description: classes.checkboxDescription
                }}
                {...props}
            />
            {children && <Stack pl="xl">{children}</Stack>}
        </Stack>
    );
};

const CheckboxGroup = ({
    label,
    value,
    onChange,
    size = 'sm',
    row = false,
    options,
    ...props
}: CheckboxGroupProps) => {
    const checkboxOptions = options.map(
        ({ label, value, description, children }) => (
            <Checkbox
                key={value}
                label={label}
                value={value}
                description={description}
                children={children}
            />
        )
    );
    return (
        <MantineCheckbox.Group
            label={label}
            value={value}
            onChange={onChange}
            size={size}
            {...props}
            classNames={{
                label: classes.checkboxGroupLabel
            }}
        >
            <Flex direction={row ? 'row' : 'column'} gap={row ? 'md' : 'xs'}>
                {checkboxOptions}
            </Flex>
        </MantineCheckbox.Group>
    );
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
