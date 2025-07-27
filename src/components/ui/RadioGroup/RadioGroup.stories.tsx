import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './index';

const meta: Meta<typeof RadioGroup> = {
    title: 'UI/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
    argTypes: {
        row: {
            control: 'boolean',
            description: 'Whether to display radio buttons in a row'
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Size of the radio buttons'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the entire radio group is disabled'
        }
    }
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const defaultOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
];

export const Default: Story = {
    args: {
        label: 'Select an option',
        options: defaultOptions,
        value: '1'
    }
};

export const ManyItems: Story = {
    args: {
        label: 'Select an option',
        options: Array.from({ length: 12 }, (_, index) => ({
            label: `Option ${index + 1}`,
            value: index.toString()
        })),
        value: '1'
    }
};
export const WithDescriptions: Story = {
    args: {
        label: 'Select a plan',
        options: [
            {
                label: 'Basic',
                value: 'basic',
                description: 'Free plan with basic features'
            },
            {
                label: 'Pro',
                value: 'pro',
                description: 'Premium plan with advanced features'
            },
            {
                label: 'Enterprise',
                value: 'enterprise',
                description: 'Custom plan for large organizations'
            }
        ],
        value: 'basic'
    }
};

export const RowLayout: Story = {
    args: {
        label: 'Select an option',
        options: defaultOptions,
        value: '1',
        row: true
    }
};

export const Disabled: Story = {
    args: {
        label: 'Select an option',
        options: defaultOptions,
        value: '1',
        disabled: true
    }
};

export const DisabledOptions: Story = {
    args: {
        label: 'Select an option',
        options: [
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2', disabled: true },
            { label: 'Option 3', value: '3' }
        ],
        value: '1'
    }
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <RadioGroup
                label="Extra Small"
                options={defaultOptions}
                value="1"
                size="xs"
            />
            <RadioGroup
                label="Small"
                options={defaultOptions}
                value="1"
                size="sm"
            />
            <RadioGroup
                label="Medium"
                options={defaultOptions}
                value="1"
                size="md"
            />
            <RadioGroup
                label="Large"
                options={defaultOptions}
                value="1"
                size="lg"
            />
            <RadioGroup
                label="Extra Large"
                options={defaultOptions}
                value="1"
                size="xl"
            />
        </div>
    )
};
