import {
    Alert as MantineAlert,
    AlertProps as MantineAlertProps
} from '@mantine/core';
import Icon from '../Icon';
import classes from './Alert.module.css';
import { useState } from 'react';

export interface AlertProps extends Omit<MantineAlertProps, 'onClose'> {
    type: 'warning' | 'info' | 'success' | 'danger' | 'ai';
    hideIcon?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    onClose?: () => void;
}

const alertTypes = {
    danger: {
        color: 'red',
        icon: <Icon type="IconAlertTriangle" />
    },
    warning: {
        color: 'yellow',
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
    ai: {
        color: 'violet',
        icon: <Icon type="IconSparkles" />
    }
};

const Alert = ({
    type,
    children,
    hideIcon,
    open: controlledOpen,
    defaultOpen = true,
    onClose,
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
            {...alertType}
            {...props}
            onClose={handleClose}
            classNames={{
                root: hideIcon ? classes.alertRootHide : classes.alertRoot,
                icon: hideIcon ? classes.alertIconHide : classes.alertIcon,
                title: classes.alertTitle,
                message: classes.alertMessage,
                closeButton: classes.alertCloseButton
            }}
        >
            {children}
        </MantineAlert>
    );
};

export default Alert;
