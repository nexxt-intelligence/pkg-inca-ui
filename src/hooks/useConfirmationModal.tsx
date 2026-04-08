import { modals } from '@mantine/modals';
import { OpenConfirmModal } from '@mantine/modals/lib/context';
import * as React from 'react';

import Text from '../components/ui/Text';

export type ConfirmationModalProps = {
    cancelLabel?: string;
    children?: React.ReactNode;
    confirmLabel?: string;
    message?: string;
    title: string;
} & OpenConfirmModal;

export const useConfirmationModal = () => {
    const showConfirmationModal = ({
        cancelLabel = 'Cancel',
        centered = true,
        children = <></>,
        confirmLabel = 'Confirm',
        title,
        ...props
    }: ConfirmationModalProps): Promise<boolean> => {
        return new Promise((resolve) => {
            modals.openConfirmModal({
                centered,
                children,
                groupProps: { mt: 'md', position: 'apart' },
                labels: { cancel: cancelLabel, confirm: confirmLabel },
                onCancel: () => resolve(false),
                onConfirm: () => resolve(true),
                styles: { title: { fontWeight: 500 } },
                title,
                ...props
            });
        });
    };

    const showSimpleConfirmationModal = ({
        cancelLabel = 'Cancel',
        centered = true,
        confirmLabel = 'Confirm',
        message = '',
        title,
        ...props
    }: ConfirmationModalProps): Promise<boolean> => {
        return new Promise((resolve) => {
            modals.openConfirmModal({
                centered,
                children: <Text>{message}</Text>,
                groupProps: { mt: 'md', position: 'apart' },
                labels: { cancel: cancelLabel, confirm: confirmLabel },
                onCancel: () => resolve(false),
                onConfirm: () => resolve(true),
                styles: { title: { fontWeight: 500 } },
                title,
                ...props
            });
        });
    };

    return { showConfirmationModal, showSimpleConfirmationModal };
};
