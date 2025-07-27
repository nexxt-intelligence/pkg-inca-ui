import {
    Alert as MantineAlert,
    AlertProps as MantineAlertProps
} from '@mantine/core';
import Icon from '../Icon';
import classes from './Alert.module.css';

export type AlertProps = {
    type: 'warning' | 'info' | 'success' | 'danger';
    leftLine?: boolean;
} & MantineAlertProps;

const alertTypes = {
    danger: {
        color: 'red',
        icon: <Icon type="IconAlertTriangleFilled" />
    },
    warning: {
        color: 'yellow',
        icon: <Icon type="IconAlertTriangleFilled" />
    },
    info: {
        color: 'blue',
        icon: <Icon type="IconInfoCircleFilled" />
    },
    success: {
        color: 'green',
        icon: <Icon type="IconCheck" />
    }
};

export default function Alert(props: AlertProps) {
    const type = alertTypes[props.type];

    return (
        <MantineAlert
            {...type}
            {...props}
            radius={0}
            classNames={{
                root: props.leftLine ? classes.leftLine : '',
                title: classes.title
            }}
        >
            {props.children}
        </MantineAlert>
    );
}
