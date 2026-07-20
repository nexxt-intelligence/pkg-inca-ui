import type { Meta, StoryObj } from '@storybook/react';

import CloseButton from './index';

export default {
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
} as Meta<typeof CloseButton>;

export const Primary: StoryObj<typeof CloseButton> = {
    args: {
        size: 'md',
        variant: 'subtle'
    }
};
