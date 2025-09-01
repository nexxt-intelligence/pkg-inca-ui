import type { Meta, StoryObj } from '@storybook/react';
import Radio from './index';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
    title: 'UI/Radio',
    component: Radio,
    tags: ['autodocs'],
    argTypes: {
        row: {
            control: 'boolean',
            description: 'Whether to display radio buttons in a row'
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Size of the radio buttons'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the entire radio group is disabled'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Radio>;

const defaultOptions = [
    {
        label: 'Option 1',
        value: '1',
        description: 'This is option 1',
        error: 'error message here'
    },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
];

export const Default: Story = {
    args: {
        label: 'Select an option',
        options: defaultOptions,
        value: '1'
    }
};
