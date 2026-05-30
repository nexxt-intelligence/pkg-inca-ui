import {
    Loader,
    Select as MantineSelect,
    SelectProps as MantineSelectProps
} from '@mantine/core';

import Icon, { TablerIconKeys } from '../Icon';
import Label, { type LabelProps } from '../Label';
import classes from './Select.module.css';

export interface SelectProps extends MantineSelectProps {
    icon?: TablerIconKeys;
    loading?: boolean;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
}

const Select = ({
    icon,
    label,
    loading,
    readOnly,
    tooltip,
    tooltipProps,
    variant = 'default',
    withinPortal = true,
    ...props
}: SelectProps) => {
    return (
        <MantineSelect
            classNames={{
                input: classes.selectInput
            }}
            data-readonly={readOnly}
            icon={typeof icon === 'string' ? <Icon type={icon} /> : icon}
            label={
                label ? (
                    <Label
                        label={label}
                        tooltip={tooltip}
                        tooltipProps={tooltipProps}
                    />
                ) : null
            }
            readOnly={readOnly}
            variant={readOnly ? 'unstyled' : variant}
            withinPortal={withinPortal}
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
