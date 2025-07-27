import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';
import Icon from '../Icon';

const meta: Meta<typeof Input> = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['default', 'filled', 'unstyled']
        }
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Default Input',
        placeholder: 'Enter text here'
    }
};

export const WithTooltip: Story = {
    args: {
        label: 'Input with Tooltip',
        placeholder: 'Hover over the help icon',
        tooltip: 'This is a helpful tooltip message'
    }
};

export const WithMultilineTooltip: Story = {
    args: {
        label: 'Input with Multiline Tooltip',
        placeholder: 'Hover over the help icon',
        tooltip:
            'This is a longer tooltip message that spans multiple lines to demonstrate the multiline tooltip functionality',
        multilineTooltip: true
    }
};

export const WithLeftIcon: Story = {
    args: {
        label: 'Input with Left Icon',
        placeholder: 'Search...',
        icon: <Icon type="IconSearch" size="sm" />
    }
};

export const WithRightIcon: Story = {
    args: {
        label: 'Input with Right Icon',
        placeholder: 'Enter email',
        rightSection: <Icon type="IconMail" size="sm" />
    }
};

export const WithLeftFilledSection: Story = {
    args: {
        label: 'Input with Left Filled Section',
        placeholder: 'Enter text',
        leftFilledSection: (
            <div
                style={{
                    padding: '0 10px',
                    background: 'var(--mantine-color-gray-1)'
                }}
            >
                @
            </div>
        )
    }
};

export const WithRightFilledSection: Story = {
    args: {
        label: 'Input with Right Filled Section',
        placeholder: 'Enter text',
        rightFilledSection: (
            <div
                style={{
                    padding: '0 10px',
                    background: 'var(--mantine-color-gray-1)'
                }}
            >
                .com
            </div>
        )
    }
};

export const NumberInput: Story = {
    args: {
        label: 'Number Input',
        type: 'number',
        placeholder: 'Enter a number',
        min: 0,
        max: 100
    }
};

export const PasswordInput: Story = {
    args: {
        label: 'Password Input',
        type: 'password',
        placeholder: 'Enter password'
    }
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        placeholder: 'This input is disabled',
        disabled: true
    }
};

export const WithError: Story = {
    args: {
        label: 'Input with Error',
        placeholder: 'This input has an error',
        error: 'This field is required'
    }
};
