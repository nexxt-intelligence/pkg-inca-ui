import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/ui/Button';
import Text from '../components/ui/Text';
import { useConfirmationModal } from './useConfirmationModal';

const ConfirmationModalDemo = () => {
    const { showConfirmationModal, showSimpleConfirmationModal } =
        useConfirmationModal();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                alignItems: 'flex-start'
            }}
        >
            <Button
                onClick={() =>
                    showSimpleConfirmationModal({
                        title: 'Simple Confirmation',
                        message: 'Are you sure?'
                    })
                }
            >
                Simple (string message)
            </Button>
            <Button
                onClick={() =>
                    showConfirmationModal({
                        title: 'Complex Confirmation',
                        confirmLabel: 'Submit',
                        cancelLabel: 'Go back',
                        children: (
                            <Text size="sm">
                                This is a <strong>custom children</strong>{' '}
                                confirmation modal. You can put forms, selects,
                                or any content here.
                            </Text>
                        )
                    })
                }
            >
                Complex (custom children)
            </Button>
        </div>
    );
};

export default {
    title: 'UI/Other Packages/useConfirmationModal',
    component: ConfirmationModalDemo
} as Meta<typeof ConfirmationModalDemo>;

export const Primary: StoryObj<typeof ConfirmationModalDemo> = {
    render: () => <ConfirmationModalDemo />
};
