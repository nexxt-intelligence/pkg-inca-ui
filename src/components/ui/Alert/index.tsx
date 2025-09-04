import {
    Alert as MantineAlert,
    AlertProps as MantineAlertProps
} from '@mantine/core';
import Icon from '../Icon';
import classes from './Alert.module.css';

export interface AlertProps extends MantineAlertProps {
    type: 'warning' | 'info' | 'success' | 'danger';
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
                title: classes.alertTitle
            }}
        >
            {children}
        </MantineAlert>
    );
};

export default Alert;
