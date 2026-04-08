import { Meta, StoryObj } from '@storybook/react';

import Switch from './index';

export default {
    args: {
        disabled: false,
        fullWidth: false,
        label: 'Switch label',
        labelPosition: 'right'
    },
    argTypes: {
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        label: { control: 'text' },
        labelPosition: {
            control: 'radio',
            options: ['left', 'right'],
            table: { defaultValue: { summary: 'right' } }
        },
        tooltip: { control: 'text' }
    },
    component: Switch,
    title: 'UI/Inputs/Switch'
} as Meta<typeof Switch>;

export const Primary: StoryObj<typeof Switch> = {};
