import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './index';

export default {
    title: 'UI/Inputs/TextArea',
    component: TextArea,
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        tooltip: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        readOnly: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        minRows: {
            control: 'number',
            table: { defaultValue: { summary: '1' } }
        },
        autosize: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        }
    }
} as Meta<typeof TextArea>;

export const Primary: StoryObj<typeof TextArea> = {
    args: {
        label: 'Text area',
        placeholder: 'Enter text here'
    }
};
