import * as React from 'react';
import {
    CloseButton as MantineCloseButton,
    CloseButtonProps as MantineCloseButtonProps
} from '@mantine/core';
import classes from './CloseButton.module.css';

const CloseButton = (props: MantineCloseButtonProps) => {
    const getIconSize = React.useCallback(
        (size: MantineCloseButtonProps['size']) => {
            switch (size) {
                case 'xs':
                    return '12px';
                case 'sm':
                    return '16px';
                case 'md':
                    return '20px';
                case 'lg':
                    return '24px';
                case 'xl':
                    return '32px';
            }
        },
        []
    );
    return (
        <MantineCloseButton
            variant="subtle"
            className={classes.closeButton}
            iconSize={getIconSize(props.size)}
            {...props}
        />
    );
};

export default CloseButton;
