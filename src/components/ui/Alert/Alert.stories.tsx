import type { Meta, StoryObj } from '@storybook/react';

import { Alert, Stack } from '../../..';

const alertTypes = ['info', 'success', 'warning', 'danger', 'ai'] as const;

const meta = {
    args: {
        children: 'Alert example',
        title: 'Alert title',
        type: 'info',
        variant: 'light'
    },
    argTypes: {
        children: { control: 'text' },
        loading: { control: 'boolean' },
        title: { control: 'text' },
        type: {
            control: 'radio',
            options: alertTypes,
            table: { defaultValue: { summary: 'info' } }
        },
        variant: {
            control: 'radio',
            options: ['filled', 'outline', 'light'],
            table: { defaultValue: { summary: 'light' } }
        },
        withCloseButton: { control: 'boolean' }
    },
    component: Alert,
    title: 'UI/Feedback/Alert'
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Types: Story = {
    argTypes: { type: { table: { disable: true } } },
    render: (args) => (
        <Stack spacing="sm">
            {alertTypes.map((type) => (
                <Alert {...args} key={type} title={type} type={type} />
            ))}
        </Stack>
    )
};
