import Switch from './index';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

export default {
    title: 'UI/Switch',
    component: Switch,
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        label: { control: 'text' },
        labelPosition: {
            control: 'radio',
            options: ['left', 'right']
        },
        showTooltip: { control: 'boolean' },
        tooltipText: { control: 'text' },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        }
    }
} as Meta<typeof Switch>;

const SwitchStory = (args: any) => {
    const [checked, setChecked] = useState(args.checked || false);
    
    return (
        <Switch
            {...args}
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
        />
    );
};

export const Default: StoryObj<typeof Switch> = {
    render: (args) => <SwitchStory {...args} />,
    args: {
        label: 'Default switch'
    }
};

export const Checked: StoryObj<typeof Switch> = {
    render: (args) => <SwitchStory {...args} />,
    args: {
        label: 'Checked switch',
        checked: true
    }
};

export const WithTooltip: StoryObj<typeof Switch> = {
    render: (args) => <SwitchStory {...args} />,
    args: {
        label: 'Switch with tooltip',
        showTooltip: true,
        tooltipText: 'This is a helpful tooltip explanation'
    }
};

export const Disabled: StoryObj<typeof Switch> = {
    render: (args) => <SwitchStory {...args} />,
    args: {
        label: 'Disabled switch',
        disabled: true
    }
};

export const DisabledChecked: StoryObj<typeof Switch> = {
    render: (args) => <SwitchStory {...args} />,
    args: {
        label: 'Disabled checked switch',
        disabled: true,
        checked: true
    }
};

export const RightLabel: StoryObj<typeof Switch> = {
    render: (args) => <SwitchStory {...args} />,
    args: {
        label: 'Right positioned label',
        labelPosition: 'right'
    }
};

export const FullWidth: StoryObj<typeof Switch> = {
    render: (args) => <SwitchStory {...args} />,
    args: {
        label: 'Full width switch',
        fullWidth: true
    }
};

export const Sizes: StoryObj<typeof Switch> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Switch
                label="Extra small"
                size="xs"
                checked={true}
                onChange={() => {}}
            />
            <Switch
                label="Small"
                size="sm"
                checked={true}
                onChange={() => {}}
            />
            <Switch
                label="Medium"
                size="md"
                checked={true}
                onChange={() => {}}
            />
            <Switch
                label="Large"
                size="lg"
                checked={true}
                onChange={() => {}}
            />
            <Switch
                label="Extra large"
                size="xl"
                checked={true}
                onChange={() => {}}
            />
        </div>
    )
};