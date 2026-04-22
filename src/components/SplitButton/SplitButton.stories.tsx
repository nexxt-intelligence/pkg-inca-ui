import type { Meta, StoryObj } from '@storybook/react';

import SplitButton from './index';

export default {
    args: {
        children: 'Send',
        color: 'primary',
        disabled: false,
        items: [
            { label: 'Schedule for later', onClick: () => {} },
            { label: 'Save draft', onClick: () => {} },
            { label: 'Delete', onClick: () => {} }
        ],
        loading: false,
        menuIcon: 'IconChevronDown',
        size: 'sm',
        variant: 'filled'
    },
    argTypes: {
        buttonIcon: {
            control: 'select',
            options: ['IconPlus']
        },
        children: { control: 'text' },
        color: {
            control: 'radio',
            options: ['primary', 'green', 'red', 'dark'],
            table: { defaultValue: { summary: 'primary' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        menuIcon: {
            control: 'select',
            options: ['IconChevronDown', 'IconDotsVertical', 'IconPlus']
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md'],
            table: { defaultValue: { summary: 'sm' } }
        }
    },
    component: SplitButton,
    title: 'Components/SplitButton'
} as Meta<typeof SplitButton>;

export const Primary: StoryObj<typeof SplitButton> = {};
