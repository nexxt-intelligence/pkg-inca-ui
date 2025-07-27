import { MiniModal, MiniModalContent, MiniModalActions } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '../Button';

export default {
    title: 'UI/MiniModal',
    component: MiniModal,
    argTypes: {
        isOpen: { control: 'boolean' },
        isClosable: { control: 'boolean' }
    }
} as Meta<typeof MiniModal>;

const MiniModalStory = (args: any) => {
    const [isOpen, setIsOpen] = useState(args.isOpen || false);
    
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Mini Modal</Button>
            <MiniModal
                {...args}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <MiniModalContent
                    header="Sample Modal"
                    body="This is a sample modal content with some text."
                >
                    <MiniModalActions>
                        <Button variant="outline" onClick={() => setIsOpen(false)}>
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

export const Default: StoryObj<typeof MiniModal> = {
    render: (args) => <MiniModalStory {...args} />,
    args: {
        isClosable: true
    }
};

export const NotClosable: StoryObj<typeof MiniModal> = {
    render: (args) => <MiniModalStory {...args} />,
    args: {
        isClosable: false
    }
};

export const CustomContent: StoryObj<typeof MiniModal> = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Custom Modal</Button>
                <MiniModal
                    {...args}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                        <h3>Custom Content</h3>
                        <p>You can add any custom content here.</p>
                        <Button onClick={() => setIsOpen(false)}>Close</Button>
                    </div>
                </MiniModal>
            </>
        );
    },
    args: {
        isClosable: true
    }
};