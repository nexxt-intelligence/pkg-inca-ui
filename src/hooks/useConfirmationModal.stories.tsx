import type { Meta, StoryObj } from '@storybook/react';

import { Button, Stack, Text, useConfirmationModal } from '..';

/**
 * **Custom inca-ui hook.** Built on the Mantine [modals manager](https://v6.mantine.dev/others/modals/).
 *
 * `showSimpleConfirmationModal` opens a confirm modal with a title and message. `showConfirmationModal`
 * takes your own content and button labels. Needs `CustomMantineProvider` (it includes `ModalsProvider`).
 */
const ConfirmationModalDemo = () => {
    const { showConfirmationModal, showSimpleConfirmationModal } =
        useConfirmationModal();

    return (
        <Stack align="flex-start" spacing="sm">
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
        </Stack>
    );
};

const meta = {
    component: ConfirmationModalDemo,
    title: 'UI/Other Packages/useConfirmationModal'
} satisfies Meta<typeof ConfirmationModalDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
