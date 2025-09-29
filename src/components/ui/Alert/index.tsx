import {
    Alert as MantineAlert,
    AlertProps as MantineAlertProps
} from '@mantine/core';
import Icon from '../Icon';
import classes from './Alert.module.css';

export interface AlertProps extends MantineAlertProps {
    type: 'warning' | 'info' | 'success' | 'danger' | 'ai';
    hideIcon?: boolean;
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

const Alert = ({ type, children, hideIcon, ...props }: AlertProps) => {
    const alertType = alertTypes[type];

    return (
        <MantineAlert
            {...alertType}
            {...props}
            classNames={{
                root: hideIcon ? classes.alertRootHide : classes.alertRoot,
                icon: hideIcon ? classes.alertIconHide : classes.alertIcon,
                title: classes.alertTitle,
                message: classes.alertMessage
            }}
            data-with-close-button={props.withCloseButton ? true : undefined}
        >
            {children}
        </MantineAlert>
    );
};

export default Alert;
