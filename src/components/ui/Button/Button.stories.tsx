import Button from './index';
import { Meta, StoryObj } from '@storybook/react';
import Icon from '../Icon';

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        variant: {
            control: 'radio',
            options: [
                'outline',
                'white',
                'light',
                'default',
                'filled',
                'gradient',
                'subtle',
                'modalCloseText',
                'projectCard',
                'transparent',
                'usefulLinks'
            ]
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        color: {
            control: 'select',
            options: ['blue', 'red', 'green', 'gray', 'yellow']
        },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        uppercase: { control: 'boolean' },
        compact: { control: 'boolean' }
    }
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
    args: {
        children: 'Click Me',
        variant: 'filled',
        color: 'blue'
    }
};

export const Outline: StoryObj<typeof Button> = {
    args: {
        children: 'Outline Button',
        variant: 'outline',
        color: 'blue'
    }
};

export const WithIcon: StoryObj<typeof Button> = {
    args: {
        children: 'Add Item',
        leftIcon: <Icon type="IconPlus" size="sm" />,
        variant: 'filled',
        color: 'blue'
    }
};

export const Loading: StoryObj<typeof Button> = {
    args: {
        children: 'Loading...',
        loading: true,
        variant: 'filled',
        color: 'blue'
    }
};

export const Disabled: StoryObj<typeof Button> = {
    args: {
        children: 'Disabled Button',
        disabled: true,
        variant: 'filled',
        color: 'blue'
    }
};

export const Compact: StoryObj<typeof Button> = {
    args: {
        children: 'Compact Button',
        compact: true,
        variant: 'filled',
        color: 'blue'
    }
};

export const Uppercase: StoryObj<typeof Button> = {
    args: {
        children: 'Uppercase Button',
        uppercase: true,
        variant: 'filled',
        color: 'blue'
    }
};
