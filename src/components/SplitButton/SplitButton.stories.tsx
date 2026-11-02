import type { Meta, StoryObj } from '@storybook/react';

import { SplitButton } from '../..';

const meta = {
    args: {
        children: 'Send',
        color: 'primary',
        disabled: false,
        items: [
            { label: 'Schedule for later', onClick: () => {} },
            { label: 'Save draft', onClick: () => {} },
            { label: 'Delete', onClick: () => {} }
        ],
        menuIcon: 'IconChevronDown',
        size: 'sm'
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
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithItemTooltips: Story = {
    args: {
        items: [
            {
                label: 'Schedule for later',
                onClick: () => {},
                tooltip:
                    'Queues this action so it can be sent at a scheduled time.',
                tooltipPosition: 'top'
            },
            {
                label: 'Save draft',
                onClick: () => {},
                tooltip: 'Keeps the current content without sending it.',
                tooltipPosition: 'right'
            },
            {
                label: 'Delete',
                onClick: () => {},
                tooltip: 'Removes this item permanently.',
                tooltipPosition: 'bottom'
            }
        ]
    }
};
