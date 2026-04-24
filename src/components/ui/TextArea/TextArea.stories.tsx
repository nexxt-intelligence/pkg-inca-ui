import type { Meta, StoryObj } from '@storybook/react';

import TextArea from './index';

export default {
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
} as Meta<typeof TextArea>;

export const Primary: StoryObj<typeof TextArea> = {
    args: {
        label: 'Text area',
        placeholder: 'Enter text here'
    }
};
