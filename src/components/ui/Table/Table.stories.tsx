import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { ActionIcon, Badge, Group, Pagination, Stack, Table } from '../../..';
import StoryLabel from '../../../docs/StoryLabel';

const rows = [
    {
        access: ['READ'],
        clients: 'All clients',
        createdAt: 'Aug 2, 2026',
        createdBy: 'You',
        expires: 'Never',
        hint: 'inca_live_…4f2a',
        lastUsed: '2 hours ago',
        name: 'Power BI — weekly refresh'
    },
    {
        access: ['READ', 'PII & MEDIA'],
        clientNames: 'Acme Foods, Northwind',
        clients: '2 clients',
        createdAt: 'Jul 11, 2026',
        createdBy: 'Priya Natarajan',
        expires: 'Dec 31, 2026',
        hint: 'inca_live_…9c1e',
        lastUsed: 'Yesterday',
        name: 'Displayr (Acme & Northwind)'
    },
    {
        access: ['READ'],
        clients: 'All clients',
        createdAt: 'May 20, 2026',
        createdBy: 'Marcus Bell',
        expired: true,
        expires: 'Expired Sep 1',
        hint: 'inca_live_…b31c',
        lastUsed: 'Never',
        name: 'Snowflake nightly export'
    }
];

const KeysTable = (args: Partial<React.ComponentProps<typeof Table>>) => (
    <Table {...args}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Access</th>
                <th>Client access</th>
                <th>Created by</th>
                <th>Last used</th>
                <th>Expires</th>
                <th aria-label="Actions" />
            </tr>
        </thead>
        <tbody>
            {rows.map((row) => (
                <tr key={row.hint}>
                    <td>
                        <Table.CellText description={row.hint}>
                            {row.name}
                        </Table.CellText>
                    </td>
                    <td>
                        <Group spacing="2xs">
                            {row.access.map((label) => (
                                <Badge
                                    color={
                                        label === 'READ' ? 'primary' : 'dark'
                                    }
                                    key={label}
                                    size="sm"
                                    variant="light"
                                >
                                    {label}
                                </Badge>
                            ))}
                        </Group>
                    </td>
                    <td>
                        <Table.CellText description={row.clientNames}>
                            {row.clients}
                        </Table.CellText>
                    </td>
                    <td>
                        <Table.CellText description={row.createdAt}>
                            {row.createdBy}
                        </Table.CellText>
                    </td>
                    <td>{row.lastUsed}</td>
                    <td>
                        <Table.CellText muted={row.expired}>
                            {row.expires}
                        </Table.CellText>
                    </td>
                    <td align="right">
                        <ActionIcon
                            aria-label="More actions"
                            icon="IconDots"
                            variant="muted"
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);

const meta = {
    args: {
        children: null,
        highlightOnHover: false,
        withBorder: true
    },
    argTypes: {
        children: { table: { disable: true } },
        highlightOnHover: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        withBorder: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        }
    },
    component: Table,
    render: (args) => <KeysTable {...args} />,
    title: 'UI/Data Display/Table'
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const CellText: Story = {
    render: () => (
        <Stack spacing="md">
            <StoryLabel>Main line only</StoryLabel>
            <Table.CellText>Power BI — weekly refresh</Table.CellText>
            <StoryLabel>With description</StoryLabel>
            <Table.CellText description="inca_live_…4f2a">
                Power BI — weekly refresh
            </Table.CellText>
            <StoryLabel>Muted</StoryLabel>
            <Table.CellText muted>Expired Sep 1</Table.CellText>
        </Stack>
    )
};

export const Empty: Story = {
    render: (args) => (
        <Table {...args}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Access</th>
                    <th>Last used</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={3}>
                        <Table.CellText muted>No keys yet.</Table.CellText>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
};

const WithPaginationExample = () => {
    const [page, setPage] = useState(1);
    return (
        <Stack spacing="md">
            <KeysTable />
            <Pagination
                hideOnSinglePage
                onChange={setPage}
                summary="3 of 120 keys"
                total={40}
                value={page}
            />
        </Stack>
    );
};

export const WithPagination: Story = {
    render: () => <WithPaginationExample />
};
