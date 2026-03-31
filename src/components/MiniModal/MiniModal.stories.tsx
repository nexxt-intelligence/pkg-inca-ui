import { MiniModal, MiniModalContent, MiniModalActions } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '../ui/Button';

export default {
    title: 'Components/MiniModal',
    component: MiniModal,
    argTypes: {
        isClosable: { control: 'boolean' }
    }
} as Meta<typeof MiniModal>;

const MiniModalStory = (args: any) => {
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
                    header="Modal Title"
                    body="Modal body content."
                >
                    <MiniModalActions>
                        <Button
                            variant="default"
                            onClick={() => setIsOpen(false)}
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

export const Primary: StoryObj<typeof MiniModal> = {
    render: (args) => <MiniModalStory {...args} />,
    args: { isClosable: true }
};
