import {
    Divider,
    Group,
    Modal as MantineModal,
    ModalProps as MantineModalProps
} from '@mantine/core';
import { type ReactNode } from 'react';

import Button from '../Button';
import classes from './Modal.module.css';

export interface ModalProps extends MantineModalProps {
    cancelLabel?: string;
    confirmLabel?: string;
    /** Custom footer content. Defaults to Cancel + Done buttons. */
    footer?: ReactNode;
    onConfirm?: () => void;
}

const Modal = ({
    cancelLabel = 'Cancel',
    centered = true,
    children,
    closeOnClickOutside = true,
    closeOnEscape = true,
    confirmLabel = 'Done',
    footer,
    onClose,
    onConfirm,
    withCloseButton = true,
    ...props
}: ModalProps) => {
    const handleConfirm = () => {
        onConfirm?.();
        onClose();
    };

    const defaultFooter = (
        <>
            <Button onClick={onClose} variant="default">
                {cancelLabel}
            </Button>
            <Button onClick={handleConfirm}>{confirmLabel}</Button>
        </>
    );

    return (
        <MantineModal
            centered={centered}
            classNames={{ title: classes.title }}
            closeOnClickOutside={closeOnClickOutside}
            closeOnEscape={closeOnEscape}
            onClose={onClose}
            withCloseButton={withCloseButton}
            {...props}
        >
            {children}
            <Divider mb="md" mt="md" />
            <Group position="apart">{footer ?? defaultFooter}</Group>
        </MantineModal>
    );
};

export default Modal;
