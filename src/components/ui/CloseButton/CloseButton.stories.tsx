import type { Meta, StoryObj } from '@storybook/react';
import CloseButton from './index';

export default {
    title: 'UI/Buttons/CloseButton',
    component: CloseButton,
    argTypes: {
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'md' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    }
} as Meta<typeof CloseButton>;

export const Primary: StoryObj<typeof CloseButton> = {
    args: {
        size: 'md'
    }
};
