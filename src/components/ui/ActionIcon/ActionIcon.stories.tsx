import type { Meta, StoryObj } from '@storybook/react';

import { ActionIcon, Group, Stack } from '../../..';
import StoryLabel from '../../../docs/StoryLabel';

const actionIconColors = [
    'primary',
    'red',
    'green',
    'gray',
    'yellow',
    'violet'
] as const;
const actionIconSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const actionIconVariants = ['filled', 'subtle', 'muted'] as const;

const meta = {
    args: {
        color: 'primary',
        disabled: false,
        icon: 'IconPlus',
        loading: false,
        size: 'sm',
        variant: 'filled'
    },
    argTypes: {
        color: {
            control: 'select',
            options: actionIconColors,
            table: { defaultValue: { summary: 'primary' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        icon: {
            control: 'select',
            options: [
                'IconPlus',
                'IconPencil',
                'IconDotsVertical',
                'IconSettings',
                'IconTrash'
            ]
        },
        loading: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        size: {
            control: 'radio',
            options: actionIconSizes,
            table: { defaultValue: { summary: 'sm' } }
        },
        variant: {
            control: 'radio',
            options: actionIconVariants,
            table: { defaultValue: { summary: 'filled' } }
        }
    },
    component: ActionIcon,
    title: 'UI/Buttons/ActionIcon'
} satisfies Meta<typeof ActionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Variants: Story = {
    argTypes: { variant: { table: { disable: true } } },
    render: (args) => (
        <Group align="flex-end" spacing="xl">
            {actionIconVariants.map((variant) => (
                <Stack align="center" key={variant} spacing="2xs">
                    <ActionIcon {...args} variant={variant} />
                    <StoryLabel>{variant}</StoryLabel>
                </Stack>
            ))}
        </Group>
    )
};

export const Sizes: Story = {
    argTypes: { size: { table: { disable: true } } },
    render: (args) => (
        <Group align="flex-end" spacing="xl">
            {actionIconSizes.map((size) => (
                <Stack align="center" key={size} spacing="2xs">
                    <ActionIcon {...args} size={size} />
                    <StoryLabel>{size}</StoryLabel>
                </Stack>
            ))}
        </Group>
    )
};

export const Colors: Story = {
    argTypes: {
        color: { table: { disable: true } },
        variant: { table: { disable: true } }
    },
    render: (args) => (
        <Stack spacing="md">
            {actionIconVariants.map((variant) => (
                <Group key={variant} spacing="sm">
                    <StoryLabel ta="right" w={96}>
                        {variant}
                    </StoryLabel>
                    {actionIconColors.map((color) => (
                        <Stack align="center" key={color} spacing="2xs">
                            <ActionIcon
                                {...args}
                                color={color}
                                variant={variant}
                            />
                            <StoryLabel>{color}</StoryLabel>
                        </Stack>
                    ))}
                </Group>
            ))}
        </Stack>
    )
};
