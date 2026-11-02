import type { Meta, StoryObj } from '@storybook/react';

import { List } from '../../..';

const meta = {
    args: {
        items: ['First item', 'Second item', 'Third item']
    },
    argTypes: {
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'md' } }
        },
        spacing: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'xs' } }
        },
        type: {
            control: 'radio',
            options: ['ordered', 'unordered'],
            table: { defaultValue: { summary: 'unordered' } }
        },
        withPadding: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    component: List,
    title: 'UI/Typography/List'
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
