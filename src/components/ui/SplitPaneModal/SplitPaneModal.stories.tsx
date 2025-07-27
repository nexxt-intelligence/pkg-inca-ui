import { SplitPaneModal, SplitPaneModalContent, SplitPaneModalActions } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';

export default {
    title: 'UI/SplitPaneModal',
    component: SplitPaneModal,
    argTypes: {
        isOpen: { control: 'boolean' },
        isClosable: { control: 'boolean' },
        isBlurred: { control: 'boolean' },
        header: { control: 'text' },
        body: { control: 'text' }
    }
} as Meta<typeof SplitPaneModal>;

const SplitPaneModalStory = (args: any) => {
    const [isOpen, setIsOpen] = useState(args.isOpen || false);
    
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Split Pane Modal</Button>
            <SplitPaneModal
                {...args}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                icon={<Icon type="IconSettings" size="lg" color="blue" />}
                header="Settings"
                body="Configure your application settings"
            >
                <SplitPaneModalContent
                    header="General Settings"
                    body="Adjust your general preferences"
                >
                    <div style={{ padding: '20px' }}>
                        <p>Settings content goes here...</p>
                    </div>
                    <SplitPaneModalActions>
                        <Button variant="outline" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={() => setIsOpen(false)}>
                            Save Changes
                        </Button>
                    </SplitPaneModalActions>
                </SplitPaneModalContent>
            </SplitPaneModal>
        </>
    );
};

export const Default: StoryObj<typeof SplitPaneModal> = {
    render: (args) => <SplitPaneModalStory {...args} />,
    args: {
        isClosable: true,
        isBlurred: true
    }
};

export const NotClosable: StoryObj<typeof SplitPaneModal> = {
    render: (args) => <SplitPaneModalStory {...args} />,
    args: {
        isClosable: false,
        isBlurred: true
    }
};

export const NotBlurred: StoryObj<typeof SplitPaneModal> = {
    render: (args) => <SplitPaneModalStory {...args} />,
    args: {
        isClosable: true,
        isBlurred: false
    }
};

export const WithDifferentIcon: StoryObj<typeof SplitPaneModal> = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Warning Modal</Button>
                <SplitPaneModal
                    {...args}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    icon={<Icon type="IconAlertTriangle" size="lg" color="orange" />}
                    header="Warning"
                    body="Please review this important information"
                >
                    <SplitPaneModalContent
                        header="Important Notice"
                        body="This action cannot be undone"
                    >
                        <div style={{ padding: '20px' }}>
                            <p>Are you sure you want to proceed?</p>
                        </div>
                        <SplitPaneModalActions>
                            <Button variant="outline" onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button color="orange" onClick={() => setIsOpen(false)}>
                                Proceed
                            </Button>
                        </SplitPaneModalActions>
                    </SplitPaneModalContent>
                </SplitPaneModal>
            </>
        );
    },
    args: {
        isClosable: true,
        isBlurred: true
    }
};