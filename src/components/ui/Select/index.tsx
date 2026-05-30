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
    onCreateAction?: () => void;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
}

const Select = ({
    creatable,
    getCreateLabel,
    icon,
    label,
    loading,
    onCreate,
    onCreateAction,
    readOnly,
    shouldCreate,
    tooltip,
    tooltipProps,
    variant = 'default',
    withinPortal = true,
    ...props
}: SelectProps) => {
    const isCreateAction = !!onCreateAction && !creatable;
    const hasCreatable = !!creatable || isCreateAction;

    const handleCreate = (query: string) => {
        if (isCreateAction) {
            onCreateAction();
            return null;
        }

        return onCreate?.(query) ?? query;
    };

    const handleCreateLabel = (query: string) => (
        <span className={classes.selectCreateLabel}>
            {getCreateLabel?.(query) ?? `+ Add ${query}`}
        </span>
    );

    return (
        <MantineSelect
            classNames={{
                input: classes.selectInput
            }}
            creatable={hasCreatable}
            data-readonly={readOnly}
            getCreateLabel={handleCreateLabel}
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
            onCreate={hasCreatable ? handleCreate : onCreate}
            readOnly={readOnly}
            shouldCreate={isCreateAction ? () => true : shouldCreate}
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
