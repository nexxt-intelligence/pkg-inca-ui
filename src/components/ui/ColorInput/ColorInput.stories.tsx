import type { Meta, StoryObj } from '@storybook/react';
import ColorInput from './index';

export default {
    title: 'UI/Inputs/ColorInput',
    component: ColorInput,
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        format: {
            control: 'radio',
            options: ['hex', 'rgb', 'hsl'],
            table: { defaultValue: { summary: 'hex' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        description: { control: 'text' },
        tooltip: { control: 'text' }
    }
} as Meta<typeof ColorInput>;

export const Primary: StoryObj<typeof ColorInput> = {
    args: {
        label: 'Color',
        placeholder: 'Pick a color',
        defaultValue: '#228be6'
    }
};
