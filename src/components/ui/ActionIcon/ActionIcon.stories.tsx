import type { Meta, StoryObj } from '@storybook/react';
import ActionIcon from './index';
import { TablerIconKeys } from '../Icon';

const meta: Meta<typeof ActionIcon> = {
    title: 'UI/Buttons/ActionIcon',
    component: ActionIcon,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['filled', 'subtle']
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        icon: {
            control: 'select',
            options: [
                'IconPlus',
                'IconPencil',
                'IconDotsVertical',
                'IconSettings',
                'IconTrash'
            ]
        },
        disabled: {
            control: 'boolean'
        },
        loading: {
            control: 'boolean'
        },
        color: {
            control: 'select',
            options: ['primary', 'red', 'green']
        }
    },
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof ActionIcon>;

const baseArgs = {
    variant: 'filled',
    size: 'sm',
    icon: 'IconPlus' as TablerIconKeys,
    disabled: false,
    loading: false,
    color: 'primary'
};

export const Default: Story = { args: baseArgs };

export const Variants: Story = {
    args: baseArgs,
    argTypes: { variant: { control: false } },
    render: (args) => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ActionIcon {...args} variant="filled" />
            <ActionIcon {...args} variant="subtle" />
        </div>
    )
};

export const Sizes: Story = {
    args: baseArgs,
    argTypes: { size: { control: false } },
    render: (args) => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ActionIcon {...args} size="xs" />
            <ActionIcon {...args} size="sm" />
            <ActionIcon {...args} size="md" />
            <ActionIcon {...args} size="lg" />
            <ActionIcon {...args} size="xl" />
        </div>
    )
};
