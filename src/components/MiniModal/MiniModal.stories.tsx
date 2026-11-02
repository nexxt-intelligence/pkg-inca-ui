import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import {
    Button,
    MiniModal,
    MiniModalActions,
    MiniModalContent,
    type MiniModalProps
} from '../..';

const meta = {
    args: { isClosable: true },
    argTypes: {
        isClosable: { control: 'boolean' }
    },
    component: MiniModal,
    title: 'Components/MiniModal'
} satisfies Meta<typeof MiniModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const MiniModalStory = (args: MiniModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <MiniModal
                {...args}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <MiniModalContent
                    body="Modal body content."
                    header="Modal Title"
                >
                    <MiniModalActions>
                        <Button
                            onClick={() => setIsOpen(false)}
                            variant="default"
                        >
                            Cancel
                        </Button>
                        <Button onClick={() => setIsOpen(false)}>
                            Confirm
                        </Button>
                    </MiniModalActions>
                </MiniModalContent>
            </MiniModal>
        </>
    );
};

export const Primary: Story = {
    render: (args) => <MiniModalStory {...args} />
};
