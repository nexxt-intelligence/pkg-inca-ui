import { Meta, StoryObj } from '@storybook/react';

import Alert from './index';

export default {
    argTypes: {
        children: { control: 'text' },
        title: { control: 'text' },
        type: {
            control: 'radio',
            description: 'The type of the alert',
            options: ['warning', 'info', 'success', 'danger', 'ai'],
            table: { defaultValue: { summary: 'info' } }
        },
        variant: {
            control: 'radio',
            description: 'The variant of the alert',
            options: ['filled', 'outline', 'light'],
            table: { defaultValue: { summary: 'light' } }
        }
    },
    component: Alert,
    title: 'UI/Feedback/Alert'
} as Meta<typeof Alert>;

export const Primary: StoryObj<typeof Alert> = {
    args: {
        children: 'Alert example',
        title: 'Alert title',
        type: 'danger',
        variant: 'light'
    }
};

export const AllTypes: StoryObj<typeof Alert> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Alert title="Info" type="info" variant="light">
                This is an informational message.
            </Alert>
            <Alert title="Success" type="success" variant="light">
                Action completed successfully.
            </Alert>
            <Alert title="Warning" type="warning" variant="light">
                Please review before continuing.
            </Alert>
            <Alert title="Danger" type="danger" variant="light">
                Something went wrong.
            </Alert>
            <Alert title="AI" type="ai" variant="light">
                This is an AI-generated message.
            </Alert>
        </div>
    )
};
