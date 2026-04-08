import type { Meta, StoryObj } from '@storybook/react';

import ChatInput from './index';

export default {
    argTypes: {
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        placeholder: { control: 'text' }
    },
    component: ChatInput,
    title: 'Components/ChatInput'
} as Meta<typeof ChatInput>;

export const Primary: StoryObj<typeof ChatInput> = {
    args: {
        handleSend: () => {},
        placeholder: 'Type a message...'
    }
};

export const Disabled: StoryObj<typeof ChatInput> = {
    args: {
        disabled: true,
        handleSend: () => {},
        placeholder: 'Type a message...'
    }
};
