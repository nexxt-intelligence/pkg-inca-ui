import type { Meta, StoryObj } from '@storybook/react';

import { Pagination, Stack } from '../../..';
import StoryLabel from '../../../docs/StoryLabel';

const meta = {
    args: {
        defaultValue: 1,
        hideOnSinglePage: false,
        total: 10,
        withEdges: false
    },
    argTypes: {
        hideOnSinglePage: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        summary: { control: 'text' },
        total: { control: { min: 0, type: 'number' } },
        withEdges: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    component: Pagination,
    title: 'UI/Navigation/Pagination'
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithSummary: Story = {
    args: { summary: '10 of 120 keys', total: 12 }
};

export const States: Story = {
    render: () => (
        <Stack spacing="md">
            <StoryLabel>First page</StoryLabel>
            <Pagination defaultValue={1} total={10} />
            <StoryLabel>Middle page</StoryLabel>
            <Pagination defaultValue={5} total={10} />
            <StoryLabel>Disabled</StoryLabel>
            <Pagination defaultValue={2} disabled total={10} />
            <StoryLabel>One page, hideOnSinglePage</StoryLabel>
            <Pagination hideOnSinglePage summary="4 of 4 keys" total={1} />
        </Stack>
    )
};
