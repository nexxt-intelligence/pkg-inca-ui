import {
    Flex,
    Checkbox as MantineCheckbox,
    CheckboxGroupProps as MantineCheckboxGroupProps,
    CheckboxProps as MantineCheckboxProps
} from '@mantine/core';

import Label from '../Label';
import classes from './Checkbox.module.css';

export interface CheckboxGroupProps
    extends Omit<MantineCheckboxGroupProps, 'children'> {
    children?: React.ReactNode;
    disabled?: boolean;
    options?: CheckboxProps[];
    row?: boolean;
    tooltip?: string;
}

export interface CheckboxProps extends MantineCheckboxProps {
    value: number | string;
}

const Checkbox = ({ ...props }: CheckboxProps) => {
    return (
        <MantineCheckbox
            classNames={{
                description: classes.checkboxDescription,
                error: classes.checkboxError,
                inner: classes.checkboxInner,
                input: classes.checkboxInput,
                label: classes.checkboxLabel
            }}
            {...props}
        />
    );
};

const CheckboxGroup = ({
    children,
    disabled,
    label,
    options,
    row = false,
    tooltip,
    ...props
}: CheckboxGroupProps) => {
    const checkboxOptions = options?.map(({ value, ...rest }) => (
        <Checkbox disabled={disabled} key={value} value={value} {...rest} />
    ));
    return (
        <MantineCheckbox.Group
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
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
