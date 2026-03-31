import type { Meta, StoryObj } from '@storybook/react';
import ActionCard from './index';

export default {
    title: 'Components/ActionCard',
    component: ActionCard,
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
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
        disabled: { control: 'boolean' }
    }
} as Meta<typeof ActionCard>;

export const Primary: StoryObj<typeof ActionCard> = {
    args: {
        title: 'Action Title',
        description: 'A short description of the action goes here.',
        icon: 'IconSend',
        disabled: false,
        onClick: () => console.log('clicked')
    }
};
