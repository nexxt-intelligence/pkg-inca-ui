import {
    Alert as MantineAlert,
    AlertProps as MantineAlertProps
} from '@mantine/core';
import { useState } from 'react';

import Icon from '../Icon';
import classes from './Alert.module.css';

export interface AlertProps extends MantineAlertProps {
    defaultOpen?: boolean;
    hideIcon?: boolean;
    onClose?: () => void;
    open?: boolean;
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

const Alert = ({
    children,
    defaultOpen = true,
    hideIcon,
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
                closeButton: classes.alertCloseButton,
                icon: hideIcon ? classes.alertIconHide : classes.alertIcon,
                message: classes.alertMessage,
                root: hideIcon ? classes.alertRootHide : classes.alertRoot,
                title: classes.alertTitle
            }}
            onClose={handleClose}
            {...alertType}
            {...props}
        >
            {children}
        </MantineAlert>
    );
};

export default Alert;
