import type { Meta, StoryObj } from '@storybook/react';

import { Group } from '@mantine/core';
import { useState } from 'react';

import Button from '../Button';
import Text from '../Text';
import Modal, { ModalProps } from './index';

export default {
    argTypes: {
        cancelLabel: { control: 'text' },
        centered: {
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
        confirmLabel: { control: 'text' },
        fullScreen: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        title: { control: 'text' },
        withCloseButton: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        }
    },
    component: Modal,
    title: 'UI/Overlays/Modal'
} as Meta<typeof Modal>;

const ModalStory = (args: Partial<ModalProps>) => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Button onClick={() => setOpened(true)}>Open Modal</Button>
            <Modal {...args} onClose={() => setOpened(false)} opened={opened}>
                <Text size="sm">
                    This is the modal body content. You can put any React
                    content here.
                </Text>
            </Modal>
        </>
    );
};

export const Default: StoryObj<typeof Modal> = {
    args: {
        title: 'Modal Title'
    },
    render: (args) => <ModalStory {...args} />
};

const CustomFooterStory = (args: Partial<ModalProps>) => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Button onClick={() => setOpened(true)}>Open Modal</Button>
            <Modal
                {...args}
                footer={
                    <>
                        <Button
                            onClick={() => setOpened(false)}
                            variant="subtle"
                        >
                            Preview
                        </Button>
                        <Group position="right" spacing="xs">
                            <Button
                                onClick={() => setOpened(false)}
                                variant="default"
                            >
                                Cancel
                            </Button>
                            <Button onClick={() => setOpened(false)}>
                                Submit Survey
                            </Button>
                        </Group>
                    </>
                }
                onClose={() => setOpened(false)}
                opened={opened}
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
    args: {
        title: 'Submit Survey'
    },
    render: (args) => <CustomFooterStory {...args} />
};
