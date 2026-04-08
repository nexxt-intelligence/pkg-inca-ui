import type { Meta, StoryObj } from '@storybook/react';

import NumberInput from './index';

export default {
    argTypes: {
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
} as Meta<typeof NumberInput>;

export const Primary: StoryObj<typeof NumberInput> = {
    args: {
        label: 'Number',
        placeholder: 'Enter a number'
    }
};
