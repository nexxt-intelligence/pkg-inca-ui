import type { Meta, StoryObj } from '@storybook/react';

import { Badge, Group, Stack } from '../../..';
import StoryLabel from '../../../docs/StoryLabel';

const badgeColors = [
    'primary',
    'green',
    'yellow',
    'red',
    'dark',
    'violet'
] as const;
const badgeSizes = ['sm', 'md'] as const;
const badgeVariants = ['filled', 'light', 'outline', 'dot'] as const;

const meta = {
    args: {
        children: 'Badge',
        color: 'primary',
        fullWidth: false,
        size: 'md',
        variant: 'filled'
    },
    argTypes: {
        children: { control: 'text' },
        color: {
            control: 'select',
            options: badgeColors,
            table: { defaultValue: { summary: 'primary' } }
        },
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        size: {
            control: 'radio',
            options: badgeSizes,
            table: { defaultValue: { summary: 'md' } }
        },
        variant: {
            control: 'radio',
            options: badgeVariants,
            table: { defaultValue: { summary: 'filled' } }
        }
    },
    component: Badge,
    title: 'UI/Data Display/Badge'
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Variants: Story = {
    argTypes: {
        color: { table: { disable: true } },
        variant: { table: { disable: true } }
    },
    render: (args) => (
        <Stack spacing="md">
            {badgeVariants.map((variant) => (
                <Group key={variant} spacing="sm">
                    <StoryLabel ta="right" w={96}>
                        {variant}
                    </StoryLabel>
                    {badgeColors.map((color) => (
                        <Badge
                            {...args}
                            color={color}
                            key={color}
                            variant={variant}
                        >
                            {color}
                        </Badge>
                    ))}
                </Group>
            ))}
        </Stack>
    )
};

export const Sizes: Story = {
    argTypes: { size: { table: { disable: true } } },
    render: (args) => (
        <Group align="flex-end" spacing="xl">
            {badgeSizes.map((size) => (
                <Stack align="center" key={size} spacing="2xs">
                    <Badge {...args} size={size} />
                    <StoryLabel>{size}</StoryLabel>
                </Stack>
            ))}
        </Group>
    )
};

export const Colors: Story = {
    argTypes: { color: { table: { disable: true } } },
    render: (args) => (
        <Group align="flex-end" spacing="xl">
            {badgeColors.map((color) => (
                <Stack align="center" key={color} spacing="2xs">
                    <Badge {...args} color={color} />
                    <StoryLabel>{color}</StoryLabel>
                </Stack>
            ))}
        </Group>
    )
};
