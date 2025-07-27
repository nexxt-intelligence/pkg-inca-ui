import Checkbox from './index';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

export default {
    title: 'UI/Checkbox',
    component: Checkbox,
    argTypes: {
        label: { control: 'text' },
        description: { control: 'text' },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        disabled: { control: 'boolean' },
        checked: { control: 'boolean' },
        indeterminate: { control: 'boolean' }
    }
} as Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {
    args: {
        label: 'Default checkbox',
        value: 'default'
    }
};

export const Checked: StoryObj<typeof Checkbox> = {
    args: {
        label: 'Checked checkbox',
        value: 'checked',
        checked: true
    }
};

export const WithDescription: StoryObj<typeof Checkbox> = {
    args: {
        label: 'Checkbox with description',
        description: 'This is a helpful description',
        value: 'description'
    }
};

export const Disabled: StoryObj<typeof Checkbox> = {
    args: {
        label: 'Disabled checkbox',
        value: 'disabled',
        disabled: true
    }
};

export const DisabledChecked: StoryObj<typeof Checkbox> = {
    args: {
        label: 'Disabled checked checkbox',
        value: 'disabled-checked',
        disabled: true,
        checked: true
    }
};

export const Indeterminate: StoryObj<typeof Checkbox> = {
    args: {
        label: 'Indeterminate checkbox',
        value: 'indeterminate',
        indeterminate: true
    }
};

export const Sizes: StoryObj<typeof Checkbox> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Checkbox label="Extra small" value="xs" size="xs" />
            <Checkbox label="Small" value="sm" size="sm" />
            <Checkbox label="Medium" value="md" size="md" />
            <Checkbox label="Large" value="lg" size="lg" />
            <Checkbox label="Extra large" value="xl" size="xl" />
        </div>
    )
};

const CheckboxGroupStory = () => {
    const [value, setValue] = useState<string[]>(['react']);
    
    return (
        <Checkbox.Group
            label="Select your favorite frameworks/libraries"
            value={value}
            onChange={setValue}
            options={[
                { label: 'React', value: 'react' },
                { label: 'Vue', value: 'vue' },
                { label: 'Angular', value: 'angular' },
                { label: 'Svelte', value: 'svelte' }
            ]}
        />
    );
};

export const Group: StoryObj = {
    render: () => <CheckboxGroupStory />
};

const CheckboxGroupRowStory = () => {
    const [value, setValue] = useState<string[]>(['option1']);
    
    return (
        <Checkbox.Group
            label="Row layout"
            value={value}
            onChange={setValue}
            row={true}
            options={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' }
            ]}
        />
    );
};

export const GroupRow: StoryObj = {
    render: () => <CheckboxGroupRowStory />
};