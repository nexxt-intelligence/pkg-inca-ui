import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Checkbox from './index';

export default {
    args: {
        description: '',
        disabled: false,
        error: '',
        label: 'Checkbox label',
        value: 'example'
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
    component: Checkbox,
    title: 'UI/Inputs/Checkbox'
} as Meta<typeof Checkbox>;

export const Primary: StoryObj<typeof Checkbox> = {
    args: {
        checked: false,
        indeterminate: false,
        labelPosition: 'right'
    },
    argTypes: {
        checked: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        indeterminate: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        labelPosition: {
            control: 'radio',
            options: ['left', 'right'],
            table: { defaultValue: { summary: 'right' } }
        }
    }
};

const CheckboxGroupControlled = (
    args: React.ComponentProps<typeof Checkbox.Group>
) => {
    const [value, setValue] = useState<string[]>([]);
    return (
        <Checkbox.Group
            {...args}
            onChange={setValue}
            options={[
                { label: 'React', value: 'react' },
                { label: 'Vue', value: 'vue' },
                { label: 'Angular', value: 'angular' }
            ]}
            value={value}
        />
    );
};

export const Group: StoryObj<typeof Checkbox.Group> = {
    args: {
        description: '',
        disabled: false,
        error: '',
        label: 'Select your favorites',
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
        onChange: { control: false, table: { disable: true } },
        row: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tooltip: { control: 'text' },
        value: { control: false, table: { disable: true } },
        withAsterisk: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    render: (args) => <CheckboxGroupControlled {...args} />
};
