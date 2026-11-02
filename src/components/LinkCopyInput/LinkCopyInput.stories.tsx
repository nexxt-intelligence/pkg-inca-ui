import type { Meta, StoryObj } from '@storybook/react';

import { Box, LinkCopyInput } from '../..';

const meta = {
    args: {
        label: 'Shareable Link',
        value: 'https://example.com/'
    },
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' }
    },
    component: LinkCopyInput,
    title: 'Components/LinkCopyInput'
} satisfies Meta<typeof LinkCopyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => (
        <Box maw={640}>
            <LinkCopyInput {...args} />
        </Box>
    )
};
