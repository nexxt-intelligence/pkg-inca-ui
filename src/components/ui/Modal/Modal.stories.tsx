import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from './index';
import Button from '../Button';
import Text from '../Text';
import { Group } from '@mantine/core';

export default {
    title: 'UI/Overlays/Modal',
    component: Modal,
    argTypes: {
        title: { control: 'text' },
        centered: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        },
        withCloseButton: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        },
        closeOnClickOutside: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        },
        closeOnEscape: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        },
        fullScreen: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        cancelLabel: { control: 'text' },
        confirmLabel: { control: 'text' }
    }
} as Meta<typeof Modal>;

const ModalStory = (args: Partial<ModalProps>) => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Button onClick={() => setOpened(true)}>Open Modal</Button>
            <Modal {...args} opened={opened} onClose={() => setOpened(false)}>
                <Text size="sm">
                    This is the modal body content. You can put any React
                    content here.
                </Text>
            </Modal>
        </>
    );
};

export const Default: StoryObj<typeof Modal> = {
    render: (args) => <ModalStory {...args} />,
    args: {
        title: 'Modal Title'
    }
};

const CustomFooterStory = (args: Partial<ModalProps>) => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Button onClick={() => setOpened(true)}>Open Modal</Button>
            <Modal
                {...args}
                opened={opened}
                onClose={() => setOpened(false)}
                footer={
                    <>
                        <Button
                            variant="subtle"
                            onClick={() => setOpened(false)}
                        >
                            Preview
                        </Button>
                        <Group position="right" spacing="xs">
                            <Button
                                variant="default"
                                onClick={() => setOpened(false)}
                            >
                                Cancel
                            </Button>
                            <Button onClick={() => setOpened(false)}>
                                Submit Survey
                            </Button>
                        </Group>
                    </>
                }
            >
                <Text size="sm">
                    Your survey is ready to go live. You can preview it before
                    submitting or submit it now.
                </Text>
            </Modal>
        </>
    );
};

export const CustomFooter: StoryObj<typeof Modal> = {
    render: (args) => <CustomFooterStory {...args} />,
    args: {
        title: 'Submit Survey'
    }
};
