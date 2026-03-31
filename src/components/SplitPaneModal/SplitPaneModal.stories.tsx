import {
    SplitPaneModal,
    SplitPaneModalContent,
    SplitPaneModalActions
} from './index';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

export default {
    title: 'Components/SplitPaneModal',
    component: SplitPaneModal,
    argTypes: {
        isClosable: { control: 'boolean' },
        isBlurred: { control: 'boolean' },
        header: { control: 'text' },
        body: { control: 'text' }
    }
} as Meta<typeof SplitPaneModal>;

const SplitPaneModalStory = (args: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
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
                    body="Adjust your preferences"
                >
                    <SplitPaneModalActions>
                        <Button
                            variant="default"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button onClick={() => setIsOpen(false)}>Save</Button>
                    </SplitPaneModalActions>
                </SplitPaneModalContent>
            </SplitPaneModal>
        </>
    );
};

export const Primary: StoryObj<typeof SplitPaneModal> = {
    render: (args) => <SplitPaneModalStory {...args} />,
    args: { isClosable: true, isBlurred: true }
};
