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
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
                gap: 12
            }}
        >
            <Button
                onClick={() =>
                    showSimpleConfirmationModal({
                        message: 'Are you sure?',
                        title: 'Simple Confirmation'
                    })
                }
            >
                Simple (string message)
            </Button>
            <Button
                onClick={() =>
                    showConfirmationModal({
                        cancelLabel: 'Go back',
                        children: (
                            <Text size="sm">
                                This is a <strong>custom children</strong>{' '}
                                confirmation modal. You can put forms, selects,
                                or any content here.
                            </Text>
                        ),
                        confirmLabel: 'Submit',
                        title: 'Complex Confirmation'
                    })
                }
            >
                Complex (custom children)
            </Button>
        </div>
    );
};

export default {
    component: ConfirmationModalDemo,
    title: 'UI/Other Packages/useConfirmationModal'
} as Meta<typeof ConfirmationModalDemo>;

export const Primary: StoryObj<typeof ConfirmationModalDemo> = {
    render: () => <ConfirmationModalDemo />
};
