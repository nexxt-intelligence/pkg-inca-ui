import type { Meta, StoryObj } from '@storybook/react';

import { NumberInput } from '../../..';

const meta = {
    args: {
        label: 'Number',
        placeholder: 'Enter a number'
    },
    argTypes: {
        description: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        label: { control: 'text' },
        max: { control: 'number' },
        min: { control: 'number' },
        placeholder: { control: 'text' },
        readOnly: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tooltip: { control: 'text' }
    },
    component: NumberInput,
    title: 'UI/Inputs/NumberInput'
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
