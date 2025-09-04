import Alert from './index';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'UI/Alert',
    component: Alert,
    argTypes: {
        children: { control: 'text' },
        title: { control: 'text' },
        type: {
            description: 'The type of the alert',
            control: 'radio',
            options: ['warning', 'info', 'success', 'danger']
        },
        variant: {
            description: 'The variant of the alert',
            control: 'radio',
            options: ['filled', 'outline', 'light']
        }
    }
} as Meta<typeof Alert>;

export const Primary: StoryObj<typeof Alert> = {
    args: {
        title: 'Alert title',
        children: 'Alert example',
        type: 'danger',
        variant: 'light'
    }
};
