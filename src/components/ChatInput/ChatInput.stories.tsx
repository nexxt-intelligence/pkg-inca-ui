import type { Meta, StoryObj } from '@storybook/react';

import { ChatInput } from '../..';

const meta = {
    args: {
        handleSend: () => {},
        placeholder: 'Type a message...'
    },
    argTypes: {
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        placeholder: { control: 'text' }
    },
    component: ChatInput,
    title: 'Components/ChatInput'
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
        handleSend: () => {},
        placeholder: 'Type a message...'
    }
};
