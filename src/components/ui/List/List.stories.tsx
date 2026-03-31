import List from './index';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'UI/Typography/List',
    component: List,
    argTypes: {
        type: {
            control: 'radio',
            options: ['ordered', 'unordered'],
            table: { defaultValue: { summary: 'unordered' } }
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'md' } }
        },
        withPadding: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        spacing: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'xs' } }
        }
    }
} as Meta<typeof List>;

export const Primary: StoryObj<typeof List> = {
    args: {
        items: ['First item', 'Second item', 'Third item']
    }
};
