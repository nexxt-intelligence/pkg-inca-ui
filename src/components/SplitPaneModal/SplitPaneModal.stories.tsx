import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Button from '../ui/Button';
import Icon from '../ui/Icon';
import {
    SplitPaneModal,
    SplitPaneModalActions,
    SplitPaneModalContent
} from './index';

export default {
    argTypes: {
        body: { control: 'text' },
        header: { control: 'text' },
        isBlurred: { control: 'boolean' },
        isClosable: { control: 'boolean' }
    },
    component: SplitPaneModal,
    title: 'Components/SplitPaneModal'
} as Meta<typeof SplitPaneModal>;

const SplitPaneModalStory = (args: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <SplitPaneModal
                {...args}
                body="Configure your application settings"
                header="Settings"
                icon={<Icon color="blue" size="lg" type="IconSettings" />}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <SplitPaneModalContent
                    body="Adjust your preferences"
                    header="General Settings"
                >
                    <SplitPaneModalActions>
                        <Button
                            onClick={() => setIsOpen(false)}
                            variant="default"
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
    args: { isBlurred: true, isClosable: true },
    render: (args) => <SplitPaneModalStory {...args} />
};
