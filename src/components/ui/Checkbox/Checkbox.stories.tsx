import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './index';

export default {
    title: 'UI/Inputs/Checkbox',
    component: Checkbox,
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
        label: 'Checkbox label',
        value: 'example',
        disabled: false,
        error: '',
        description: ''
    }
} as Meta<typeof Checkbox>;

export const Primary: StoryObj<typeof Checkbox> = {
    argTypes: {
        labelPosition: {
            control: 'radio',
            options: ['left', 'right'],
            table: { defaultValue: { summary: 'right' } }
        },
        checked: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        indeterminate: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    args: {
        labelPosition: 'right',
        checked: false,
        indeterminate: false
    }
};

const CheckboxGroupControlled = (
    args: React.ComponentProps<typeof Checkbox.Group>
) => {
    const [value, setValue] = useState<string[]>([]);
    return (
        <Checkbox.Group
            {...args}
            value={value}
            onChange={setValue}
            options={[
                { label: 'React', value: 'react' },
                { label: 'Vue', value: 'vue' },
                { label: 'Angular', value: 'angular' }
            ]}
        />
    );
};

export const Group: StoryObj<typeof Checkbox.Group> = {
    argTypes: {
        value: { control: false, table: { disable: true } },
        onChange: { control: false, table: { disable: true } },
        label: { control: 'text' },
        description: { control: 'text' },
        error: { control: 'text' },
        tooltip: { control: 'text' },
        row: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        withAsterisk: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    args: {
        label: 'Select your favorites',
        tooltip: '',
        description: '',
        error: '',
        row: false,
        withAsterisk: false,
        disabled: false
    },
    render: (args) => <CheckboxGroupControlled {...args} />
};
