import {
    Loader,
    Select as MantineSelect,
    SelectProps as MantineSelectProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';
import Icon, { TablerIconKeys } from '../Icon';
import Label, { type LabelProps } from '../Label';
import classes from './Select.module.css';

export interface SelectProps extends StrictProps<MantineSelectProps> {
    /** Tabler icon name shown on the left of the input, e.g. `"IconSearch"` or `"IconUsers"`. */
    icon?: TablerIconKeys;
    /** Shows a loader on the right side. */
    loading?: boolean;
    /** Shows an "add" option that calls this instead of creating a value (e.g. to open a modal). */
    onCreateAction?: () => void;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the label tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: LabelProps['tooltipProps'];
}

/**
 * Mantine [Select](https://v6.mantine.dev/core/select/) with a help tooltip, a loading state and an "add" option (`creatable` or `onCreateAction`).
 */
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
        <span className={classes.createLabel}>
            {getCreateLabel?.(query) ?? `+ Add ${query}`}
        </span>
    );

    return (
        <MantineSelect
            classNames={{
                input: classes.input
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
