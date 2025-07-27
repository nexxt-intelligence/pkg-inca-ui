import List from './index';
import { Meta, StoryObj } from '@storybook/react';
import Icon from '../Icon';

export default {
    title: 'UI/List',
    component: List,
    argTypes: {
        type: {
            control: 'select',
            options: ['ordered', 'unordered']
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        withPadding: { control: 'boolean' },
        spacing: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        }
    }
} as Meta<typeof List>;

const sampleItems = [
    'First item in the list',
    'Second item with more text',
    'Third item',
    'Fourth item with even more descriptive text',
    'Fifth and final item'
];

const shortItems = [
    'Apple',
    'Banana',
    'Cherry'
];

const longItems = [
    'This is a very long list item that demonstrates how the list component handles longer text content',
    'Another long item with multiple words and detailed information about the subject matter',
    'A third lengthy item that continues the pattern of verbose descriptions',
    'Fourth item with substantial content',
    'Fifth item also quite detailed',
    'Sixth item with additional information',
    'Seventh and final long item'
];

export const Default: StoryObj<typeof List> = {
    args: {
        items: sampleItems
    }
};

export const Ordered: StoryObj<typeof List> = {
    args: {
        items: sampleItems,
        type: 'ordered'
    }
};

export const WithIcon: StoryObj<typeof List> = {
    args: {
        items: shortItems,
        icon: <Icon type="IconCheck" size="sm" color="green" />
    }
};

export const WithDifferentIcon: StoryObj<typeof List> = {
    args: {
        items: shortItems,
        icon: <Icon type="IconArrowRight" size="sm" color="blue" />
    }
};

export const SmallSize: StoryObj<typeof List> = {
    args: {
        items: sampleItems,
        size: 'sm'
    }
};

export const LargeSize: StoryObj<typeof List> = {
    args: {
        items: sampleItems,
        size: 'lg'
    }
};

export const LargeSpacing: StoryObj<typeof List> = {
    args: {
        items: sampleItems,
        spacing: 'lg'
    }
};

export const WithPadding: StoryObj<typeof List> = {
    args: {
        items: sampleItems,
        withPadding: true
    }
};

export const LongItems: StoryObj<typeof List> = {
    args: {
        items: longItems
    }
};

export const OrderedWithIcon: StoryObj<typeof List> = {
    args: {
        items: shortItems,
        type: 'ordered',
        icon: <Icon type="IconStar" size="sm" color="yellow" />
    }
};