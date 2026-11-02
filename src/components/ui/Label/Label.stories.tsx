import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../../..';

const meta = {
    args: {
        label: 'Field label',
        required: false,
        tooltip: 'Helpful context about this field'
    },
    argTypes: {
        label: { control: 'text' },
        required: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tooltip: { control: 'text' }
    },
    component: Label,
    title: 'UI/Inputs/Label'
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Standalone: Story = {
    args: { htmlFor: 'standalone-input', required: true }
};
