import type { Meta, StoryObj } from '@storybook/react';
import ActionIcon from './index';

const meta: Meta<typeof ActionIcon> = {
    title: 'UI/ActionIcon',
    component: ActionIcon,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['filled', 'light', 'outline', 'subtle', 'transparent']
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },

        disabled: {
            control: 'boolean'
        },
        loading: {
            control: 'boolean'
        },
        color: {
            control: 'select',
            options: ['blue', 'gray', 'green', 'orange', 'red', 'yellow']
        }
    }
};

export default meta;
type Story = StoryObj<typeof ActionIcon>;

export const Default: Story = {
    args: {
        icon: 'IconPlus',
        color: 'blue',
        size: 'md',
        variant: 'filled'
    }
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ActionIcon size="xs" color="blue" icon="IconPlus" />
            <ActionIcon size="sm" color="blue" icon="IconPlus" />
            <ActionIcon size="md" color="blue" icon="IconPlus" />
            <ActionIcon size="lg" color="blue" icon="IconPlus" />
            <ActionIcon size="xl" color="blue" icon="IconPlus" />
        </div>
    )
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ActionIcon color="blue" icon="IconPlus" />

            <ActionIcon color="gray" icon="IconPlus" />

            <ActionIcon color="green" icon="IconPlus" />

            <ActionIcon color="orange" icon="IconPlus" />

            <ActionIcon color="red" icon="IconPlus" />

            <ActionIcon color="yellow" icon="IconPlus" />
        </div>
    )
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ActionIcon variant="filled" color="blue" icon="IconPlus" />

            <ActionIcon variant="light" color="blue" icon="IconPlus" />

            <ActionIcon variant="outline" color="blue" icon="IconPlus" />

            <ActionIcon variant="transparent" color="blue" icon="IconPlus" />
        </div>
    )
};

export const CommonActions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ActionIcon color="blue" variant="light" icon="IconPlus" />

            <ActionIcon color="blue" variant="light" icon="IconEdit" />

            <ActionIcon color="red" variant="light" icon="IconTrash" />
        </div>
    )
};

export const Disabled: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ActionIcon disabled color="blue" icon="IconPlus" />

            <ActionIcon disabled color="gray" icon="IconPlus" />

            <ActionIcon disabled color="red" icon="IconPlus" />
        </div>
    )
};

export const Loading: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ActionIcon loading color="blue" icon="IconPlus" />

            <ActionIcon loading color="gray" icon="IconPlus" />

            <ActionIcon loading color="red" icon="IconPlus" />
        </div>
    )
};
