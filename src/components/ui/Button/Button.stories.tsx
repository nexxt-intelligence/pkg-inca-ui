import type { Meta, StoryObj } from '@storybook/react';

import { Button, Group, Stack, type TablerIconKeys } from '../../..';
import StoryLabel from '../../../docs/StoryLabel';

const buttonColors = [
    'primary',
    'green',
    'yellow',
    'red',
    'dark',
    'gray'
] as const;
const buttonSizes = ['xs', 'sm', 'md'] as const;
const buttonVariants = ['filled', 'subtle', 'outline'] as const;
const iconOptions = [
    undefined,
    'IconPlus',
    'IconPencil',
    'IconChevronDown',
    'IconSettings',
    'IconTrash'
];

const meta = {
    args: {
        children: 'Button',
        color: 'primary',
        compact: false,
        disabled: false,
        loading: false,
        size: 'sm',
        variant: 'filled'
    },
    argTypes: {
        children: { control: 'text' },
        color: {
            control: 'radio',
            options: buttonColors,
            table: { defaultValue: { summary: 'primary' } }
        },
        compact: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        leftIcon: { control: 'select', options: iconOptions },
        loading: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        radius: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'sm' } }
        },
        rightIcon: { control: 'select', options: iconOptions },
        size: {
            control: 'radio',
            options: buttonSizes,
            table: { defaultValue: { summary: 'sm' } }
        },
        variant: {
            control: 'radio',
            options: buttonVariants,
            table: { defaultValue: { summary: 'filled' } }
        }
    },
    component: Button,
    title: 'UI/Buttons/Button'
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Variants: Story = {
    argTypes: { variant: { table: { disable: true } } },
    render: (args) => (
        <Group align="flex-end" spacing="xl">
            {buttonVariants.map((variant) => (
                <Stack align="center" key={variant} spacing="2xs">
                    <Button {...args} variant={variant} />
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
            {buttonSizes.map((size) => (
                <Stack align="center" key={size} spacing="2xs">
                    <Button {...args} size={size} />
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
            {buttonVariants.map((variant) => (
                <Group key={variant} spacing="sm">
                    <StoryLabel ta="right" w={96}>
                        {variant}
                    </StoryLabel>
                    {buttonColors.map((color) => (
                        <Button
                            {...args}
                            color={color}
                            key={color}
                            variant={variant}
                        >
                            {color}
                        </Button>
                    ))}
                </Group>
            ))}
        </Stack>
    )
};

const iconCombos: {
    children: string;
    leftIcon?: TablerIconKeys;
    rightIcon?: TablerIconKeys;
}[] = [
    { children: 'leftIcon', leftIcon: 'IconPlus' },
    { children: 'rightIcon', rightIcon: 'IconChevronDown' },
    { children: 'both', leftIcon: 'IconSend', rightIcon: 'IconChevronRight' }
];

export const WithIcons: Story = {
    argTypes: {
        leftIcon: { table: { disable: true } },
        rightIcon: { table: { disable: true } },
        size: { table: { disable: true } }
    },
    render: (args) => (
        <Stack spacing="md">
            {buttonSizes.map((size) => (
                <Group key={size} spacing="sm">
                    <StoryLabel ta="right" w={96}>
                        {size}
                    </StoryLabel>
                    {iconCombos.map((combo) => (
                        <Button
                            {...args}
                            key={combo.children}
                            leftIcon={combo.leftIcon}
                            rightIcon={combo.rightIcon}
                            size={size}
                        >
                            {combo.children}
                        </Button>
                    ))}
                </Group>
            ))}
        </Stack>
    )
};
