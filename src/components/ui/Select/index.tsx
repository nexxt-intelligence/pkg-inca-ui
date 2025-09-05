import {
    Loader,
    Select as MantineSelect,
    SelectProps as MantineSelectProps
} from '@mantine/core';
import Label from '../Label';
import Icon, { TablerIconKeys } from '../Icon';
// import classes from './Select.module.css';

export interface SelectProps extends MantineSelectProps {
    tooltip?: string;
    icon?: TablerIconKeys;
    loading?: boolean;
}

const Select = ({ label, tooltip, icon, loading, ...props }: SelectProps) => {
    return (
        <MantineSelect
            label={label ? <Label label={label} tooltip={tooltip} /> : null}
            icon={typeof icon === 'string' ? <Icon type={icon} /> : icon}
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
