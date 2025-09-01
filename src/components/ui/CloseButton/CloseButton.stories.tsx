import type { Meta, StoryObj } from '@storybook/react';
import CloseButton from './index';

const meta: Meta<typeof CloseButton> = {
    title: 'UI/Buttons/CloseButton',
    component: CloseButton,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        }
    }
};

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
    args: {
        size: 'md'
    }
};
