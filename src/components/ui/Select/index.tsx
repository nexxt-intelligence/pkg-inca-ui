import * as React from 'react';
import {
    Group,
    Loader,
    Select as MantineSelect,
    SelectProps as MantineSelectProps
} from '@mantine/core';
import Text from '../Text';
import Tooltip from '../Tooltip';
import classes from './Select.module.css';
import Icon from '../Icon';

type SelectProps = {
    showTooltip?: boolean;
    tooltipText?: string;
    loading?: boolean;
} & MantineSelectProps;

const Select = ({
    showTooltip,
    tooltipText,
    label,
    loading,
    ...props
}: SelectProps) => {
    return (
        <MantineSelect
            classNames={{
                input: classes.input,
                label: classes.label
            }}
            label={
                showTooltip ? (
                    <Group spacing="var(--mantine-spacing-2xs)">
                        <Text size="sm" fw={400} span>
                            {label}
                        </Text>
                        <Tooltip withArrow label={tooltipText || ''}>
                            <Icon
                                type="IconHelpCircle"
                                size="xs"
                                color="var(--mantine-color-gray-6)"
                            />
                        </Tooltip>
                    </Group>
                ) : label ? (
                    <Text size="sm" fw={400} span>
                        {label}
                    </Text>
                ) : null
            }
            labelProps={{
                fw: 400
            }}
            {...props}
            {...(loading
                ? {
                      rightSection: <Loader size="xs" />
                  }
                : {})}
        />
    );
};

export default Select;
