import type { Meta, StoryObj } from '@storybook/react';

import * as TablerIcons from '@tabler/icons-react';
import { useState } from 'react';

import {
    Button,
    Group,
    Icon,
    Stack,
    type TablerIconKeys,
    TextInput
} from '../../..';
import StoryLabel from '../../../docs/StoryLabel';

// Every icon in the installed @tabler/icons-react version.
const allIconNames = Object.keys(TablerIcons).filter((name) =>
    name.startsWith('Icon')
) as TablerIconKeys[];
const maxShown = 120;

const iconColors = [
    'var(--icon-default)',
    'var(--icon-medium)',
    'var(--icon-subtle)',
    'var(--icon-accent)',
    'var(--icon-error)',
    'var(--icon-success)',
    'var(--icon-warning)',
    'var(--icon-ai)'
];
const iconSizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'] as const;

const meta = {
    args: {
        color: 'var(--icon-accent)',
        size: 'md',
        type: 'IconHeart'
    },
    argTypes: {
        color: { control: 'select', options: iconColors },
        size: {
            control: 'radio',
            options: iconSizes,
            table: { defaultValue: { summary: 'sm' } }
        },
        type: {
            control: 'select',
            options: [
                'IconHeart',
                'IconStar',
                'IconUser',
                'IconPlus',
                'IconPencil',
                'IconSettings',
                'IconTrash',
                'IconCheck',
                'IconX'
            ]
        }
    },
    component: Icon,
    title: 'UI/Data Display/Icon'
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Sizes: Story = {
    argTypes: { size: { table: { disable: true } } },
    render: (args) => (
        <Group align="flex-end" spacing="xl">
            {iconSizes.map((size) => (
                <Stack align="center" key={size} spacing="2xs">
                    <Icon {...args} size={size} />
                    <StoryLabel>{size}</StoryLabel>
                </Stack>
            ))}
        </Group>
    )
};

const IconSearch = () => {
    const [search, setSearch] = useState('');
    const [copied, setCopied] = useState('');
    const query = search.toLowerCase().replace(/[\s_-]/g, '');
    const matches = allIconNames.filter((name) =>
        name.toLowerCase().includes(query)
    );

    const copy = (name: string) => {
        navigator.clipboard
            ?.writeText(name)
            .then(() => setCopied(name))
            .catch(() => setCopied(''));
    };

    return (
        <Stack spacing="md">
            <TextInput
                description={
                    copied
                        ? `Copied ${copied}`
                        : `${matches.length} of ${allIconNames.length} icons. Click one to copy its name.`
                }
                icon="IconSearch"
                label="Search icons"
                onChange={(event) => setSearch(event.currentTarget.value)}
                placeholder="e.g. arrow, user, trash"
                value={search}
            />
            <Group spacing="xs">
                {matches.slice(0, maxShown).map((name) => (
                    <Button
                        key={name}
                        leftIcon={name}
                        onClick={() => copy(name)}
                        size="xs"
                        variant="subtle"
                    >
                        {name}
                    </Button>
                ))}
            </Group>
            {matches.length > maxShown && (
                <StoryLabel>
                    Showing {maxShown} of {matches.length}. Keep typing to
                    narrow it down.
                </StoryLabel>
            )}
        </Stack>
    );
};

export const AllIcons: Story = {
    parameters: { controls: { disable: true } },
    render: () => <IconSearch />
};
