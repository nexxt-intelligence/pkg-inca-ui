import * as React from 'react';
import { modals } from '@mantine/modals';
import Text from '../components/ui/Text';
import { OpenConfirmModal } from '@mantine/modals/lib/context';

export type ConfirmationModalProps = {
    title: string;
    confirmLabel?: string;
    cancelLabel?: string;
    message?: string;
    children?: React.ReactNode;
} & OpenConfirmModal;

export const useConfirmationModal = () => {
    const showConfirmationModal = ({
        title,
        confirmLabel = 'Confirm',
        cancelLabel = 'Cancel',
        children = <></>,
        ...props
    }: ConfirmationModalProps): Promise<boolean> => {
        return new Promise((resolve) => {
            modals.openConfirmModal({
                title,
                children,
                labels: { confirm: confirmLabel, cancel: cancelLabel },
                onCancel: () => resolve(false),
                onConfirm: () => resolve(true),
                ...props
            });
        });
    };

    const showSimpleConfirmationModal = ({
        title,
        confirmLabel = 'Confirm',
        cancelLabel = 'Cancel',
        message = '',
        ...props
    }: ConfirmationModalProps): Promise<boolean> => {
        return new Promise((resolve) => {
            modals.openConfirmModal({
                title,
                children: <Text>{message}</Text>,
                labels: { confirm: confirmLabel, cancel: cancelLabel },
                onCancel: () => resolve(false),
                onConfirm: () => resolve(true),
                ...props
            });
        });
    };

    return { showConfirmationModal, showSimpleConfirmationModal };
};
