import type { Meta, StoryObj } from '@storybook/react';

import { ColorInput } from '../../..';

const meta = {
    args: {
        defaultValue: '#228be6',
        label: 'Color',
        placeholder: 'Pick a color'
    },
    argTypes: {
        description: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        format: {
            control: 'radio',
            options: ['hex', 'rgb', 'hsl'],
            table: { defaultValue: { summary: 'hex' } }
        },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        tooltip: { control: 'text' }
    },
    component: ColorInput,
    title: 'UI/Inputs/ColorInput'
} satisfies Meta<typeof ColorInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
