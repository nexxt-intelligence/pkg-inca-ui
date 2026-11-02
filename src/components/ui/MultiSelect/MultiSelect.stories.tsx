import type { Meta, StoryObj } from '@storybook/react';

import { type ChangeEvent, useState } from 'react';

import { Modal, MultiSelect, TextInput } from '../../..';

const data = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' }
];

const meta = {
    args: {
        clearable: false,
        creatable: false,
        data,
        label: 'Select options',
        nothingFound: 'No options',
        placeholder: 'Choose values',
        searchable: true
    },
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
        maxSelectedValues: { control: 'number' },
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
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithNonRemovableValue: Story = {
    args: {
        clearable: true,
        defaultValue: ['react'],
        nonRemovableValues: ['react']
    }
};

export const Creatable: Story = {
    args: {
        creatable: true,
        getCreateLabel: (query) => `+ Add ${query}`
    }
};

const createValue = (label: string) => label.toLowerCase().replace(/\s+/g, '-');

const WithCreateActionStory = () => {
    const [data, setData] = useState([
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' }
    ]);
    const [error, setError] = useState<null | string>(null);
    const [inputValue, setInputValue] = useState('');
    const [opened, setOpened] = useState(false);
    const [value, setValue] = useState(['react']);

    const closeModal = () => {
        setError(null);
        setOpened(false);
        setInputValue('');
    };

    const confirmCreate = () => {
        const label = inputValue.trim();

        if (!label) return false;

        const nextValue = createValue(label);
        const exists = data.some((item) => item.value === nextValue);

        if (exists) {
            setError('Cannot add duplicate items');
            return false;
        }

        setError(null);
        setData((items) => [...items, { label, value: nextValue }]);
        setValue((items) => [...items, nextValue]);
    };

    return (
        <>
            <MultiSelect
                clearable
                data={data}
                getCreateLabel={() => '+ Add framework'}
                label="Select options"
                onChange={setValue}
                onCreateAction={() => setOpened(true)}
                placeholder="Pick or add values"
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
                    error={error}
                    label="Framework name"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setError(null);
                        setInputValue(e.currentTarget.value);
                    }}
                    placeholder="e.g. React"
                    value={inputValue}
                />
            </Modal>
        </>
    );
};

export const WithCreateAction: Story = {
    argTypes: {
        creatable: { table: { disable: true } },
        getCreateLabel: { table: { disable: true } },
        onCreateAction: { table: { disable: true } }
    },
    render: () => <WithCreateActionStory />
};
