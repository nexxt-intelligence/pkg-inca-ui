import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Button from '../ui/Button';
import { MiniModal, MiniModalActions, MiniModalContent } from './index';

export default {
    argTypes: {
        isClosable: { control: 'boolean' }
    },
    component: MiniModal,
    title: 'Components/MiniModal'
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

export const Primary: StoryObj<typeof MiniModal> = {
    args: { isClosable: true },
    render: (args) => <MiniModalStory {...args} />
};
