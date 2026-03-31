import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Radio from './index';

export default {
    title: 'UI/Inputs/Radio',
    component: Radio,
    argTypes: {
        label: { control: 'text' },
        description: { control: 'text' },
        error: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    args: {
        label: 'Radio label',
        value: '1',
        disabled: false,
        error: '',
        description: ''
    }
} as Meta<typeof Radio>;

export const Primary: StoryObj<typeof Radio> = {};

const RadioGroupControlled = (
    args: React.ComponentProps<typeof Radio.Group>
) => {
    const [value, setValue] = useState('1');
    return (
        <Radio.Group
            {...args}
            value={value}
            onChange={setValue}
            options={[
                { label: 'Option 1', value: '1' },
                { label: 'Option 2', value: '2' },
                { label: 'Option 3', value: '3' }
            ]}
        />
    );
};

export const Group: StoryObj<typeof Radio.Group> = {
    argTypes: {
        value: { table: { disable: true } },
        onChange: { table: { disable: true } },
        label: { control: 'text' },
        tooltip: { control: 'text' },
        description: { control: 'text' },
        error: { control: 'text' },
        row: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        withAsterisk: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    args: {
        label: 'Select an option',
        tooltip: '',
        description: '',
        error: '',
        row: false,
        disabled: false,
        withAsterisk: false
    },
    render: (args) => <RadioGroupControlled {...args} />
};
