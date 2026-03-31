import type { Meta, StoryObj } from '@storybook/react';
import Select from './index';
import QuestionSelectItem from './SelectItem/QuestionSelectItem';
import FontSelectItem from './SelectItem/FontSelectItem';

export default {
    title: 'UI/Inputs/Select',
    component: Select,
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
        required: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        searchable: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        clearable: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'sm' } }
        }
    }
} as Meta<typeof Select>;

export const Primary: StoryObj<typeof Select> = {
    args: {
        label: 'Select an option',
        placeholder: 'Pick a value',
        data: [
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' }
        ]
    }
};

export const WithQuestionSelectItem: StoryObj<typeof Select> = {
    name: 'Custom Item — QuestionSelectItem',
    args: {
        label: 'Select a question',
        placeholder: 'Pick a question',
        itemComponent: QuestionSelectItem,
        data: [
            {
                value: 'q1',
                label: 'What is your age?',
                title: 'Age',
                imageUrl: 'https://i.pravatar.cc/24?img=1'
            },
            {
                value: 'q2',
                label: 'What is your occupation?',
                title: 'Occupation',
                imageUrl: 'https://i.pravatar.cc/24?img=2'
            },
            {
                value: 'q3',
                label: 'What is your income?',
                title: 'Income',
                imageUrl: 'https://i.pravatar.cc/24?img=3'
            }
        ] as any
    }
};

export const WithFontSelectItem: StoryObj<typeof Select> = {
    name: 'Custom Item — FontSelectItem',
    args: {
        label: 'Select a font',
        placeholder: 'Pick a font',
        itemComponent: FontSelectItem,
        data: [
            { value: 'Inter, sans-serif', label: 'Inter' },
            { value: 'Georgia, serif', label: 'Georgia' },
            { value: "'Courier New', monospace", label: 'Courier New' },
            { value: 'Arial, sans-serif', label: 'Arial' }
        ]
    }
};
