import * as React from 'react';
import {
    Box,
    CloseButton,
    Group,
    Loader,
    MultiSelect as MantineMultiSelect,
    MultiSelectProps as MantineMultiSelectProps,
    MultiSelectValueProps
} from '@mantine/core';
import Text from '../Text';
import Tooltip from '../Tooltip';
import classes from './MultiSelect.module.css';
import Icon from '../Icon';

type MultiSelectProps = {
    showTooltip?: boolean;
    tooltipText?: string;
    loading?: boolean;
} & MantineMultiSelectProps;

const MultiSelect = ({
    showTooltip,
    tooltipText,
    label,
    loading,
    ...props
}: MultiSelectProps) => {
    return (
        <MantineMultiSelect
            classNames={{
                input: classes.input,
                label: classes.label,
                values: classes.values
            }}
            label={
                showTooltip ? (
                    <Group spacing="var(--mantine-spacing-2xs)">
                        <Text size="sm" fw={400} span>
                            {label}
                        </Text>
                        <Tooltip withArrow label={tooltipText || ''}>
                            <Icon type="IconHelp" size="xs" color="gray" />
                        </Tooltip>
                    </Group>
                ) : (
                    <Text size="sm" fw={400} span>
                        {label}
                    </Text>
                )
            }
            labelProps={{
                fw: 400
            }}
            valueComponent={ValueComponent}
            {...props}
            {...(loading
                ? {
                      rightSection: <Loader size="xs" />
                  }
                : {})}
        />
    );
};

const ValueComponent = ({
    label,
    onRemove,
    ...others
}: MultiSelectValueProps) => {
    return (
        <div {...others}>
            <Box className={classes.value_container}>
                <Text span size="xs" fw={400} display="contents" truncate="end">
                    {label}
                </Text>
                <CloseButton
                    onMouseDown={onRemove}
                    variant="transparent"
                    size={22}
                    iconSize={14}
                    tabIndex={-1}
                />
            </Box>
        </div>
    );
};

export default MultiSelect;
