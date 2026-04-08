import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './index';

export default {
    argTypes: {
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
        readOnly: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tooltip: { control: 'text' }
    },
    component: TextInput,
    title: 'UI/Inputs/TextInput'
} as Meta<typeof TextInput>;

export const Primary: StoryObj<typeof TextInput> = {
    args: {
        label: 'Text input',
        placeholder: 'Enter text here'
    }
};

export const WithIcon: StoryObj<typeof TextInput> = {
    args: {
        icon: 'IconSearch',
        label: 'Search',
        placeholder: 'Type to search...'
    }
};
