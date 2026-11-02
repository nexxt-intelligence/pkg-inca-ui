import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '../../..';

const meta = {
    args: {
        label: 'Text area',
        placeholder: 'Enter text here'
    },
    argTypes: {
        autosize: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        },
        description: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        label: { control: 'text' },
        minRows: {
            control: 'number',
            table: { defaultValue: { summary: '1' } }
        },
        placeholder: { control: 'text' },
        readOnly: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tooltip: { control: 'text' }
    },
    component: TextArea,
    title: 'UI/Inputs/TextArea'
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
