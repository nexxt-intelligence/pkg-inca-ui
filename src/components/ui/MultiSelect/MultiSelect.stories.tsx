import type { Meta, StoryObj } from '@storybook/react';

import MultiSelect from './index';

export default {
    argTypes: {
        clearable: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        description: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        label: { control: 'text' },
        loading: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        maxSelectedValues: { control: 'number' },
        placeholder: { control: 'text' },
        readOnly: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        required: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        searchable: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tooltip: { control: 'text' }
    },
    component: MultiSelect,
    title: 'UI/Inputs/MultiSelect'
} as Meta<typeof MultiSelect>;

export const Primary: StoryObj<typeof MultiSelect> = {
    args: {
        clearable: true,
        data: [
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Angular', value: 'angular' },
            { label: 'Svelte', value: 'svelte' }
        ],
        label: 'Select options',
        placeholder: 'Choose values',
        searchable: true
    }
};
