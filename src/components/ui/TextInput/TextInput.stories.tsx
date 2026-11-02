import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '../../..';

const meta = {
    args: {
        label: 'Text input',
        placeholder: 'Enter text here'
    },
    argTypes: {
        description: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        icon: {
            control: 'select',
            options: [
                undefined,
                'IconSearch',
                'IconUser',
                'IconMail',
                'IconLock'
            ]
        },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        prefix: { control: 'text' },
        readOnly: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tooltip: { control: 'text' }
    },
    component: TextInput,
    title: 'UI/Inputs/TextInput'
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithIcon: Story = {
    args: {
        icon: 'IconSearch',
        label: 'Search',
        placeholder: 'Type to search...'
    }
};
