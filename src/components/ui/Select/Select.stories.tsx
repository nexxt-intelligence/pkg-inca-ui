import type { Meta, StoryObj } from '@storybook/react';

import { type ChangeEvent, useState } from 'react';

import Modal from '../Modal';
import TextInput from '../TextInput';
import Select from './index';
import FontSelectItem from './SelectItem/FontSelectItem';
import QuestionSelectItem from './SelectItem/QuestionSelectItem';

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
        clearable: false,
        creatable: false,
        data: [
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Angular', value: 'angular' },
            { label: 'Svelte', value: 'svelte' }
        ],
        label: 'Select an option',
        nothingFoundMessage: 'No options available',
        placeholder: 'Pick a value',
        searchable: true
    }
};

const createValue = (label: string) => label.toLowerCase().replace(/\s+/g, '-');

const questionData = [
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
];

const fontData = [
    { label: 'Inter', value: 'Inter, sans-serif' },
    { label: 'Georgia', value: 'Georgia, serif' },
    { label: 'Courier New', value: "'Courier New', monospace" },
    { label: 'Arial', value: 'Arial, sans-serif' }
];

const WithCreateActionStory = () => {
    const [data, setData] = useState([
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [opened, setOpened] = useState(false);
    const [value, setValue] = useState<null | string>(null);

    const closeModal = () => {
        setOpened(false);
        setInputValue('');
    };

    const confirmCreate = () => {
        const label = inputValue.trim();

        if (!label) return false;

        const nextValue = createValue(label);

        setData((items) =>
            items.some((item) => item.value === nextValue)
                ? items
                : [...items, { label, value: nextValue }]
        );
        setValue(nextValue);
    };

    return (
        <>
            <Select
                data={data}
                getCreateLabel={() => '+ Add framework'}
                label="Select an option"
                onChange={setValue}
                onCreateAction={() => setOpened(true)}
                placeholder="Pick or add a value"
                searchable
                value={value}
            />
            <Modal
                onClose={closeModal}
                onConfirm={confirmCreate}
                opened={opened}
                title="Add framework"
            >
                <TextInput
                    autoFocus
                    label="Framework name"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setInputValue(event.currentTarget.value)
                    }
                    placeholder="e.g. Solid"
                    value={inputValue}
                />
            </Modal>
        </>
    );
};

export const WithCreateAction: StoryObj<typeof Select> = {
    argTypes: {
        creatable: { table: { disable: true } },
        getCreateLabel: { table: { disable: true } },
        onCreateAction: { table: { disable: true } }
    },
    render: () => <WithCreateActionStory />
};

export const WithQuestionSelectItem: StoryObj<typeof Select> = {
    name: 'Custom Item - QuestionSelectItem',
    render: () => (
        <Select
            data={questionData}
            label="Select a question"
            placeholder="Pick a question"
            renderOption={({ option }) => {
                const item = questionData.find(
                    (dataItem) => dataItem.value === option.value
                );

                return item ? (
                    <QuestionSelectItem
                        imageUrl={item.imageUrl}
                        label={item.label}
                        title={item.title}
                    />
                ) : (
                    option.label
                );
            }}
        />
    )
};

export const WithFontSelectItem: StoryObj<typeof Select> = {
    name: 'Custom Item - FontSelectItem',
    render: () => (
        <Select
            data={fontData}
            label="Select a font"
            placeholder="Pick a font"
            renderOption={({ option }) => (
                <FontSelectItem label={option.label} value={option.value} />
            )}
        />
    )
};
