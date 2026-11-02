import type { Meta, StoryObj } from '@storybook/react';

import { CloseButton } from '../../..';

const meta = {
    args: {
        size: 'md',
        variant: 'subtle'
    },
    argTypes: {
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'md' } }
        },
        variant: {
            control: 'radio',
            options: ['subtle', 'transparent'],
            table: { defaultValue: { summary: 'subtle' } }
        }
    },
    component: CloseButton,
    title: 'UI/Buttons/CloseButton'
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
