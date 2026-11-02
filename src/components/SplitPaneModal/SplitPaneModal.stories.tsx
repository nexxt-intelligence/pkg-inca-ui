import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import {
    Button,
    Icon,
    SplitPaneModal,
    SplitPaneModalActions,
    SplitPaneModalContent,
    type SplitPaneModalProps
} from '../..';

const meta = {
    args: { isBlurred: true, isClosable: true },
    argTypes: {
        body: { control: 'text' },
        header: { control: 'text' },
        isBlurred: { control: 'boolean' },
        isClosable: { control: 'boolean' }
    },
    component: SplitPaneModal,
    title: 'Components/SplitPaneModal'
} satisfies Meta<typeof SplitPaneModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const SplitPaneModalStory = (args: SplitPaneModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <SplitPaneModal
                {...args}
                body="Configure your application settings"
                header="Settings"
                icon={<Icon color="primary" size="lg" type="IconSettings" />}
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

export const Primary: Story = {
    render: (args) => <SplitPaneModalStory {...args} />
};
