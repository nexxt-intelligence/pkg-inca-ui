import type { Meta, StoryObj } from '@storybook/react';

import MultiSelect from './index';

export default {
    argTypes: {
        clearable: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        creatable: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        description: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        hidePickedOptions: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        label: { control: 'text' },
        loading: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        maxValues: { control: 'number' },
        nonRemovableValues: { control: 'object' },
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

const data = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' }
];

export const Primary: StoryObj<typeof MultiSelect> = {
    args: {
        clearable: false,
        data,
        label: 'Select options',
        nothingFoundMessage: 'No options',
        placeholder: 'Choose values',
        searchable: true
    }
};

export const WithNonRemovableValue: StoryObj<typeof MultiSelect> = {
    args: {
        ...Primary.args,
        clearable: true,
        defaultValue: ['react'],
        nonRemovableValues: ['react']
    }
};

export const Creatable: StoryObj<typeof MultiSelect> = {
    args: {
        ...Primary.args,
        creatable: true,
        getCreateLabel: (query) => `+ Add ${query}`
    }
};
