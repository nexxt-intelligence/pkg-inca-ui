import {
    Loader,
    Select as MantineSelect,
    SelectProps as MantineSelectProps
} from '@mantine/core';

import Icon, { TablerIconKeys } from '../Icon';
import Label from '../Label';
// import classes from './Select.module.css';

export interface SelectProps extends MantineSelectProps {
    icon?: TablerIconKeys;
    loading?: boolean;
    tooltip?: string;
}

const Select = ({
    icon,
    label,
    loading,
    tooltip,
    variant = 'default',
    withinPortal = true,
    ...props
}: SelectProps) => {
    return (
        <MantineSelect
            data-variant={variant}
            icon={typeof icon === 'string' ? <Icon type={icon} /> : icon}
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            variant={variant}
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
