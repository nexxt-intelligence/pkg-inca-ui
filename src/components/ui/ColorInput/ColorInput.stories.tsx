import type { Meta, StoryObj } from '@storybook/react';

import ColorInput from './index';

export default {
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
} as Meta<typeof ColorInput>;

export const Primary: StoryObj<typeof ColorInput> = {
    args: {
        defaultValue: '#228be6',
        label: 'Color',
        placeholder: 'Pick a color'
    }
};
