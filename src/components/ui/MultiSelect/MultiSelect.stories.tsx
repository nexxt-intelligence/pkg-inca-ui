import type { Meta, StoryObj } from '@storybook/react';
import MultiSelect from './index';

export default {
    title: 'UI/Inputs/MultiSelect',
    component: MultiSelect,
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        tooltip: { control: 'text' },
        loading: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        required: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        searchable: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        clearable: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        maxSelectedValues: { control: 'number' }
    }
} as Meta<typeof MultiSelect>;

export const Primary: StoryObj<typeof MultiSelect> = {
    args: {
        label: 'Select options',
        placeholder: 'Choose values',
        data: [
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' }
        ],
        searchable: true,
        clearable: true
    }
};
