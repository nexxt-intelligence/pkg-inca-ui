import type { Meta, StoryObj } from '@storybook/react';
import ActionCard from './index';
import { Center, Flex } from '@mantine/core';

const meta: Meta<typeof ActionCard> = {
    title: 'Components/ActionCard',
    component: ActionCard,
    argTypes: {
        onClick: { action: 'clicked' },
        icon: {
            control: 'select',
            options: [
                'IconSend',
                'IconUser',
                'IconBell',
                'IconCheck',
                'IconAlertCircle',
                'IconEdit'
            ]
        }
    }
};

export default meta;

type Story = StoryObj<typeof ActionCard>;

export const Default: Story = {
    args: {
        title: 'Action Title',
        description:
            'A short description of the action goes here. Explain what happens when you click.',
        icon: 'IconSend',
        disabled: false
    },
    render: (args) => (
        <Center h="calc(100% - 83px)">
            {/* 83px is the height of the header */}
            <Flex w="100%" justify="center" align="center" gap="2xl">
                <ActionCard
                    {...args}
                    icon="IconSparkles"
                    title="Generate"
                    description="Coming Soon: Let AI adapt or create a survey from a brief"
                />
            </Flex>
        </Center>
    )
};

export const Disabled: Story = {
    args: {
        title: 'Disabled Action',
        description: 'This action is currently unavailable.',
        icon: 'IconBell',
        disabled: true
    }
};

export const CustomIcon: Story = {
    args: {
        title: 'User Profile',
        description: 'Access your user profile settings.',
        icon: 'IconUser',
        disabled: false
    }
};
