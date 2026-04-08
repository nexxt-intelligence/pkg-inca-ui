import { Meta, StoryObj } from '@storybook/react';

import List from './index';

export default {
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
} as Meta<typeof List>;

export const Primary: StoryObj<typeof List> = {
    args: {
        items: ['First item', 'Second item', 'Third item']
    }
};
