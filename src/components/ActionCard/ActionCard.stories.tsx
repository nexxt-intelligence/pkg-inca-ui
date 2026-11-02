import type { Meta, StoryObj } from '@storybook/react';

import { ActionCard } from '../..';

const meta = {
    args: {
        description: 'A short description of the action goes here.',
        disabled: false,
        icon: 'IconSend',
        onClick: () => console.log('clicked'),
        title: 'Action Title'
    },
    argTypes: {
        description: { control: 'text' },
        disabled: { control: 'boolean' },
        icon: {
            control: 'select',
            options: [
                'IconSend',
                'IconUser',
                'IconBell',
                'IconCheck',
                'IconSparkles',
                'IconEdit'
            ]
        },
        title: { control: 'text' }
    },
    component: ActionCard,
    title: 'Components/ActionCard'
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
