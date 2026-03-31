import Alert from './index';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'UI/Feedback/Alert',
    component: Alert,
    argTypes: {
        children: { control: 'text' },
        title: { control: 'text' },
        type: {
            description: 'The type of the alert',
            control: 'radio',
            options: ['warning', 'info', 'success', 'danger', 'ai'],
            table: { defaultValue: { summary: 'info' } }
        },
        variant: {
            description: 'The variant of the alert',
            control: 'radio',
            options: ['filled', 'outline', 'light'],
            table: { defaultValue: { summary: 'light' } }
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

export const AllTypes: StoryObj<typeof Alert> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Alert type="info" title="Info" variant="light">
                This is an informational message.
            </Alert>
            <Alert type="success" title="Success" variant="light">
                Action completed successfully.
            </Alert>
            <Alert type="warning" title="Warning" variant="light">
                Please review before continuing.
            </Alert>
            <Alert type="danger" title="Danger" variant="light">
                Something went wrong.
            </Alert>
            <Alert type="ai" title="AI" variant="light">
                This is an AI-generated message.
            </Alert>
        </div>
    )
};
