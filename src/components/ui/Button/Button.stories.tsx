import { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
    title: 'UI/Buttons/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        children: { control: 'text' },
        variant: {
            control: 'radio',
            options: ['filled', 'default', 'subtle']
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg']
        },
        compact: { control: 'boolean' },
        uppercase: { control: 'boolean' },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        leftIcon: {
            control: 'select',
            options: [undefined, 'IconPlus', 'IconChevronDown']
        },
        rightIcon: {
            control: 'select',
            options: [undefined, 'IconPlus', 'IconChevronDown']
        },
        color: {
            control: 'select',
            options: ['primary']
        }
    }
};
export default meta;

type Story = StoryObj<typeof Button>;

const baseArgs = {
    children: 'Click Me',
    variant: 'filled',
    size: 'sm',
    compact: false,
    uppercase: false,
    disabled: false,
    loading: false,
    leftIcon: undefined,
    rightIcon: undefined,
    color: 'primary'
};

export const Primary: Story = { args: baseArgs };

export const Variants: Story = {
    args: baseArgs,
    argTypes: { variant: { control: false } },
    render: (args) => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button {...args} variant="filled" />
            <Button {...args} variant="default" />
            <Button {...args} variant="subtle" />
        </div>
    )
};

export const Sizes: Story = {
    args: baseArgs,
    argTypes: { size: { control: false } },
    render: (args) => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button {...args} size="xs" />
            <Button {...args} size="sm" />
        </div>
    )
};

export const Icons: Story = {
    args: baseArgs,
    argTypes: { leftIcon: { control: false }, rightIcon: { control: false } },
    render: (args) => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button {...args} leftIcon={'IconPlus'} />
            <Button {...args} rightIcon={'IconPlus'} />
            <Button {...args} leftIcon={'IconPlus'} rightIcon={'IconPlus'} />
        </div>
    )
};

export const Compact: Story = {
    args: baseArgs,
    argTypes: { compact: { control: false } },
    render: (args) => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button {...args} compact size="xs" />
            <Button {...args} compact size="sm" />
        </div>
    )
};
