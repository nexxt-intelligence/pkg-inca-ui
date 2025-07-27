import * as React from 'react';
import {
    ActionIcon as MantineActionIcon,
    ActionIconProps as MantineActionIconProps
} from '@mantine/core';
import Icon from '../Icon';
import styles from './ActionIcon.module.css';

export type ActionIconProps = {
    icon: string;
    onClick?: () => void;
} & MantineActionIconProps;

const ActionIcon = ({
    icon,
    variant = 'filled',
    onClick,
    ...props
}: ActionIconProps) => {
    const iconSize = React.useMemo(() => {
        return props.size === 'xl' ? 'lg' : props.size;
    }, [props?.size]);

    return (
        <MantineActionIcon
            data-variant={variant}
            variant={variant}
            onClick={onClick}
            {...props}
            className={styles.container}
        >
            <Icon
                type={icon}
                size={iconSize}
                color={props.disabled ? undefined : props.color} // put undefined to inherit the color from ActionIcon when it's disabled
            />
        </MantineActionIcon>
    );
};

export default ActionIcon;
