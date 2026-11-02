import type { Meta, StoryObj } from '@storybook/react';

import { Input, Stack } from '../..';

const inputTypes = ['text', 'number', 'password'] as const;

const meta = {
    args: {
        label: 'Input label',
        placeholder: 'Enter text here'
    },
    argTypes: {
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        label: { control: 'text' },
        multilineTooltip: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        placeholder: { control: 'text' },
        tooltip: { control: 'text' },
        type: {
            control: 'radio',
            options: ['text', 'number', 'password'],
            table: { defaultValue: { summary: 'text' } }
        }
    },
    component: Input,
    title: 'Components/Input'
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Types: Story = {
    render: () => (
        <Stack spacing="sm">
            {inputTypes.map((type) => (
                <Input
                    key={type}
                    label={type}
                    placeholder={`Enter ${type}`}
                    type={type}
                />
            ))}
        </Stack>
    )
};
