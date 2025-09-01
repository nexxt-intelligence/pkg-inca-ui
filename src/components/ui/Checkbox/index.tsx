import {
    Checkbox as MantineCheckbox,
    CheckboxProps as MantineCheckboxProps,
    CheckboxGroupProps as MantineCheckboxGroupProps,
    Flex
} from '@mantine/core';
import classes from './Checkbox.module.css';

export interface CheckboxProps extends MantineCheckboxProps {
    value: string;
}

export interface CheckboxGroupProps
    extends Omit<MantineCheckboxGroupProps, 'children'> {
    row?: boolean;
    options?: CheckboxProps[];
    children?: React.ReactNode;
}

const Checkbox = ({ ...props }: CheckboxProps) => {
    return (
        <MantineCheckbox
            classNames={{
                label: classes.checkboxLabel,
                inner: classes.checkboxInner,
                input: classes.checkboxInput,
                description: classes.checkboxDescription,
                error: classes.checkboxError
            }}
            {...props}
        />
    );
};

const CheckboxGroup = ({
    row = false,
    options,
    children,
    ...props
}: CheckboxGroupProps) => {
    const checkboxOptions = options?.map(({ value, ...rest }) => (
        <Checkbox key={value} value={value} {...rest} />
    ));
    return (
        <MantineCheckbox.Group
            inputWrapperOrder={['label', 'input', 'description', 'error']}
            {...props}
        >
            <Flex
                direction={row ? 'row' : 'column'}
                gap={row ? 'md' : 'xs'}
                pb="2xs"
            >
                {checkboxOptions ? checkboxOptions : children}
            </Flex>
        </MantineCheckbox.Group>
    );
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
