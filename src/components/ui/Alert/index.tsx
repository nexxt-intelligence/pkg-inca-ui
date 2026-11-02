import {
    Loader,
    Alert as MantineAlert,
    AlertProps as MantineAlertProps
} from '@mantine/core';
import { useState } from 'react';

import { type StrictProps } from '../../../types/props';
import Icon from '../Icon';
import classes from './Alert.module.css';

export interface AlertProps
    extends Omit<StrictProps<MantineAlertProps>, 'children'> {
    /** Alert message. */
    children?: React.ReactNode;
    /** Initial open state when `open` is not controlled. */
    defaultOpen?: boolean;
    /** Hides the type icon. */
    hideIcon?: boolean;
    /** Replaces the icon with a loader. */
    loading?: boolean;
    /** Called when the close button is clicked. */
    onClose?: () => void;
    /** Controls whether the alert is shown. */
    open?: boolean;
    /** Sets the color and icon. */
    type?: 'ai' | 'danger' | 'info' | 'success' | 'warning';
}

const alertTypes = {
    ai: {
        color: 'violet',
        icon: <Icon type="IconSparkles" />
    },
    danger: {
        color: 'red',
        icon: <Icon type="IconAlertTriangle" />
    },
    info: {
        color: 'primary',
        icon: <Icon type="IconInfoCircle" />
    },
    success: {
        color: 'green',
        icon: <Icon type="IconCircleCheck" />
    },
    warning: {
        color: 'yellow',
        icon: <Icon type="IconAlertTriangle" />
    }
};

/**
 * Inline feedback message. Built on Mantine [Alert](https://v6.mantine.dev/core/alert/).
 *
 * Pick the color and icon with `type`. It closes itself, or you can control it with `open`.
 */
const Alert = ({
    children,
    defaultOpen = true,
    hideIcon,
    loading,
    onClose,
    open: controlledOpen,
    type = 'info',
    ...props
}: AlertProps) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);

    // Use controlled state if provided, otherwise use internal state
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

    const handleClose = () => {
        if (controlledOpen === undefined) {
            setInternalOpen(false);
        }
        onClose?.();
    };

    if (!isOpen) return null;

    const alertType = alertTypes[type];

    return (
        <MantineAlert
            classNames={{
                closeButton: classes.closeButton,
                icon: hideIcon ? classes.iconHidden : classes.icon,
                root: hideIcon ? classes.rootNoIcon : classes.root,
                title: classes.title
            }}
            onClose={handleClose}
            {...alertType}
            icon={
                loading ? (
                    <Loader color={alertType.color} size="1rem" />
                ) : (
                    alertType.icon
                )
            }
            {...props}
        >
            {children}
        </MantineAlert>
    );
};

export default Alert;
