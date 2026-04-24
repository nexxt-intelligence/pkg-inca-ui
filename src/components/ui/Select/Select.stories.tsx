import type { Meta, StoryObj } from '@storybook/react';

import Select from './index';
import FontSelectItem from './SelectItem/FontSelectItem';
import QuestionSelectItem from './SelectItem/QuestionSelectItem';

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
    component: Select,
    title: 'UI/Inputs/Select'
} as Meta<typeof Select>;

export const Primary: StoryObj<typeof Select> = {
    args: {
        data: [
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Angular', value: 'angular' },
            { label: 'Svelte', value: 'svelte' }
        ],
        label: 'Select an option',
        placeholder: 'Pick a value'
    }
};

export const WithQuestionSelectItem: StoryObj<typeof Select> = {
    args: {
        data: [
            {
                imageUrl: 'https://i.pravatar.cc/24?img=1',
                label: 'What is your age?',
                title: 'Age',
                value: 'q1'
            },
            {
                imageUrl: 'https://i.pravatar.cc/24?img=2',
                label: 'What is your occupation?',
                title: 'Occupation',
                value: 'q2'
            },
            {
                imageUrl: 'https://i.pravatar.cc/24?img=3',
                label: 'What is your income?',
                title: 'Income',
                value: 'q3'
            }
        ] as any,
        itemComponent: QuestionSelectItem,
        label: 'Select a question',
        placeholder: 'Pick a question'
    },
    name: 'Custom Item — QuestionSelectItem'
};

export const WithFontSelectItem: StoryObj<typeof Select> = {
    args: {
        data: [
            { label: 'Inter', value: 'Inter, sans-serif' },
            { label: 'Georgia', value: 'Georgia, serif' },
            { label: 'Courier New', value: "'Courier New', monospace" },
            { label: 'Arial', value: 'Arial, sans-serif' }
        ],
        itemComponent: FontSelectItem,
        label: 'Select a font',
        placeholder: 'Pick a font'
    },
    name: 'Custom Item — FontSelectItem'
};
