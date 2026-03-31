import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './index';

export default {
    title: 'UI/Inputs/TextInput',
    component: TextInput,
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        tooltip: { control: 'text' },
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
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        readOnly: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' }
    }
} as Meta<typeof TextInput>;

export const Primary: StoryObj<typeof TextInput> = {
    args: {
        label: 'Text input',
        placeholder: 'Enter text here'
    }
};

export const WithIcon: StoryObj<typeof TextInput> = {
    args: {
        label: 'Search',
        placeholder: 'Type to search...',
        icon: 'IconSearch'
    }
};
