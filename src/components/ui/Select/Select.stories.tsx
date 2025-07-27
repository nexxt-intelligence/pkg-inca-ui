import type { Meta, StoryObj } from '@storybook/react';
import Select from './index';
import { SelectItem } from '@mantine/core';

const meta: Meta<typeof Select> = {
    title: 'UI/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
        error: { control: 'text' },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        }
    }
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultData: SelectItem[] = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' }
];

export const Default: Story = {
    args: {
        label: 'Select an option',
        placeholder: 'Pick a value',
        data: defaultData
    }
};

export const WithError: Story = {
    args: {
        ...Default.args,
        error: 'This field is required'
    }
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true
    }
};

export const Required: Story = {
    args: {
        ...Default.args,
        required: true
    }
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Select
                size="xs"
                label="Extra Small"
                placeholder="Pick a value"
                data={defaultData}
            />
            <Select
                size="sm"
                label="Small"
                placeholder="Pick a value"
                data={defaultData}
            />
            <Select
                size="md"
                label="Medium"
                placeholder="Pick a value"
                data={defaultData}
            />
            <Select
                size="lg"
                label="Large"
                placeholder="Pick a value"
                data={defaultData}
            />
            <Select
                size="xl"
                label="Extra Large"
                placeholder="Pick a value"
                data={defaultData}
            />
        </div>
    )
};
