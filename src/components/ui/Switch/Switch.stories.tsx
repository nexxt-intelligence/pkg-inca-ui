import Switch from './index';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'UI/Inputs/Switch',
    component: Switch,
    argTypes: {
        label: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tooltip: { control: 'text' },
        labelPosition: {
            control: 'radio',
            options: ['left', 'right'],
            table: { defaultValue: { summary: 'right' } }
        }
    },
    args: {
        disabled: false,
        fullWidth: false,
        labelPosition: 'right',
        label: 'Switch label'
    }
} as Meta<typeof Switch>;

export const Primary: StoryObj<typeof Switch> = {};
