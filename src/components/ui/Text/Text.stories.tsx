import type { Meta, StoryObj } from '@storybook/react';

import { Group, Stack, Text } from '../../..';
import StoryLabel from '../../../docs/StoryLabel';

const textColors = [
    'var(--text-default)',
    'var(--text-medium)',
    'var(--text-subtle)',
    'var(--text-accent)',
    'var(--text-error)',
    'var(--text-success)',
    'var(--text-warning)',
    'var(--text-ai)'
];
const textSizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
const textWeights = [300, 400, 500, 600, 700] as const;

const meta = {
    args: {
        children: 'The quick brown fox jumps over the lazy dog'
    },
    argTypes: {
        c: {
            control: 'select',
            options: textColors
        },
        children: { control: 'text' },
        fs: {
            control: 'radio',
            options: ['normal', 'italic'],
            table: { defaultValue: { summary: 'normal' } }
        },
        fw: {
            control: 'select',
            options: textWeights,
            table: { defaultValue: { summary: '400' } }
        },
        size: {
            control: 'radio',
            options: textSizes,
            table: { defaultValue: { summary: 'md' } }
        },
        span: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        ta: {
            control: 'radio',
            options: ['left', 'center', 'right'],
            table: { defaultValue: { summary: 'left' } }
        },
        td: {
            control: 'radio',
            options: ['none', 'underline', 'line-through'],
            table: { defaultValue: { summary: 'none' } }
        },
        truncate: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tt: {
            control: 'select',
            options: ['none', 'capitalize', 'uppercase', 'lowercase'],
            table: { defaultValue: { summary: 'none' } }
        }
    },
    component: Text,
    title: 'UI/Typography/Text'
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Sizes: Story = {
    argTypes: { size: { table: { disable: true } } },
    render: (args) => (
        <Stack spacing="xs">
            {textSizes.map((size) => (
                <Group align="baseline" key={size} noWrap spacing="sm">
                    <Text {...args} size={size} />
                    <StoryLabel>{size}</StoryLabel>
                </Group>
            ))}
        </Stack>
    )
};

export const Weights: Story = {
    argTypes: { fw: { table: { disable: true } } },
    render: (args) => (
        <Stack spacing="xs">
            {textWeights.map((fw) => (
                <Group align="baseline" key={fw} noWrap spacing="sm">
                    <Text {...args} fw={fw} />
                    <StoryLabel>{fw}</StoryLabel>
                </Group>
            ))}
        </Stack>
    )
};
