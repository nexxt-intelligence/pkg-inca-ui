import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Radio from './index';

export default {
    args: {
        description: '',
        disabled: false,
        error: '',
        label: 'Radio label',
        value: '1'
    },
    argTypes: {
        description: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        label: { control: 'text' }
    },
    component: Radio,
    title: 'UI/Inputs/Radio'
} as Meta<typeof Radio>;

export const Primary: StoryObj<typeof Radio> = {};

const RadioGroupControlled = (
    args: React.ComponentProps<typeof Radio.Group>
) => {
    const [value, setValue] = useState('1');
    return (
        <Radio.Group
            {...args}
            onChange={setValue}
            options={[
                { label: 'Option 1', value: '1' },
                { label: 'Option 2', value: '2' },
                { label: 'Option 3', value: '3' }
            ]}
            value={value}
        />
    );
};

export const Group: StoryObj<typeof Radio.Group> = {
    args: {
        description: '',
        disabled: false,
        error: '',
        label: 'Select an option',
        row: false,
        tooltip: '',
        withAsterisk: false
    },
    argTypes: {
        description: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        label: { control: 'text' },
        onChange: { table: { disable: true } },
        row: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tooltip: { control: 'text' },
        value: { table: { disable: true } },
        withAsterisk: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    render: (args) => <RadioGroupControlled {...args} />
};
