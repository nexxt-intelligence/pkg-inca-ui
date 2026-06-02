import {
    Divider,
    Group,
    Modal as MantineModal,
    ModalProps as MantineModalProps
} from '@mantine/core';
import { type ReactNode, useState } from 'react';

import Button from '../Button';
import classes from './Modal.module.css';

export interface ModalProps extends MantineModalProps {
    cancelLabel?: string;
    /** Close the modal after confirm succeeds. Return false from onConfirm to keep it open. */
    closeOnConfirm?: boolean;
    confirmLabel?: string;
    /** Custom footer content. Defaults to Cancel + Done buttons. */
    footer?: ReactNode;
    onConfirm?: () => boolean | Promise<boolean | void> | void;
}

const Modal = ({
    cancelLabel = 'Cancel',
    centered = true,
    children,
    closeOnClickOutside = true,
    closeOnConfirm = true,
    closeOnEscape = true,
    confirmLabel = 'Done',
    footer,
    onClose,
    onConfirm,
    withCloseButton = true,
    ...props
}: ModalProps) => {
    const [isConfirming, setIsConfirming] = useState(false);

    const handleConfirm = async () => {
        if (isConfirming) return;

        setIsConfirming(true);
        let shouldClose: boolean | void;

        try {
            shouldClose = await onConfirm?.();
        } finally {
            setIsConfirming(false);
        }

        if (closeOnConfirm && shouldClose !== false) {
            onClose();
        }
    };

    const defaultFooter = (
        <>
            <Button disabled={isConfirming} onClick={onClose} variant="default">
                {cancelLabel}
            </Button>
            <Button loading={isConfirming} onClick={handleConfirm}>
                {confirmLabel}
            </Button>
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
