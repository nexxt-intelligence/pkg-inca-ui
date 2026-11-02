import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Switch, type SwitchProps } from '../../..';

const meta = {
    args: {
        checked: false,
        disabled: false,
        fullWidth: false,
        label: 'Switch label',
        labelPosition: 'right',
        onChange: () => {}
    },
    argTypes: {
        description: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const SwitchControlled = (args: SwitchProps) => {
    const [checked, setChecked] = useState(args.checked);

    return (
        <Switch
            {...args}
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
        />
    );
};

export const Primary: Story = {
    render: (args) => <SwitchControlled {...args} />
};
