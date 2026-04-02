import React from 'react';
import {
    Divider,
    Group,
    Modal as MantineModal,
    ModalProps as MantineModalProps
} from '@mantine/core';
import Button from '../Button';
import classes from './Modal.module.css';

export interface ModalProps extends MantineModalProps {
    cancelLabel?: string;
    confirmLabel?: string;
    /** Custom footer content. Defaults to Cancel + Done buttons. */
    footer?: React.ReactNode;
}

const Modal = ({
    centered = true,
    withCloseButton = true,
    closeOnClickOutside = true,
    closeOnEscape = true,
    cancelLabel = 'Cancel',
    confirmLabel = 'Done',
    footer,
    onClose,
    children,
    ...props
}: ModalProps) => {
    const defaultFooter = (
        <>
            <Button variant="default" onClick={onClose}>
                {cancelLabel}
            </Button>
            <Button onClick={onClose}>{confirmLabel}</Button>
        </>
    );

    return (
        <MantineModal
            classNames={{ title: classes.title }}
            centered={centered}
            withCloseButton={withCloseButton}
            closeOnClickOutside={closeOnClickOutside}
            closeOnEscape={closeOnEscape}
            onClose={onClose}
            {...props}
        >
            {children}
            <Divider mt="md" mb="md" />
            <Group position="apart">{footer ?? defaultFooter}</Group>
        </MantineModal>
    );
};

export default Modal;
