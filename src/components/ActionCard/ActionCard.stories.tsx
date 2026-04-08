import type { Meta, StoryObj } from '@storybook/react';

import ActionCard from './index';

export default {
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
} as Meta<typeof ActionCard>;

export const Primary: StoryObj<typeof ActionCard> = {
    args: {
        description: 'A short description of the action goes here.',
        disabled: false,
        icon: 'IconSend',
        onClick: () => console.log('clicked'),
        title: 'Action Title'
    }
};
