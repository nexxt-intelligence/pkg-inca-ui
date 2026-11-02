import type { Meta, StoryObj } from '@storybook/react';

import { Stack, Tabs } from '../../..';
import StoryLabel from '../../../docs/StoryLabel';

const tabVariants = ['default', 'outline', 'pills', 'contained'] as const;

const tabs = [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' }
];

const panels = (
    <>
        <Tabs.Panel pt="xs" value="first">
            First tab content
        </Tabs.Panel>
        <Tabs.Panel pt="xs" value="second">
            Second tab content
        </Tabs.Panel>
        <Tabs.Panel pt="xs" value="third">
            Third tab content
        </Tabs.Panel>
    </>
);

const meta = {
    args: {
        children: panels,
        defaultValue: 'first',
        tabs
    },
    argTypes: {
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        variant: {
            control: 'radio',
            options: tabVariants,
            table: { defaultValue: { summary: 'default' } }
        }
    },
    component: Tabs,
    title: 'UI/Navigation/Tabs'
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Variants: Story = {
    argTypes: { variant: { table: { disable: true } } },
    render: (args) => (
        <Stack spacing="2xl">
            {tabVariants.map((variant) => (
                <Stack key={variant} spacing="xs">
                    <StoryLabel>{variant}</StoryLabel>
                    <Tabs {...args} variant={variant} />
                </Stack>
            ))}
        </Stack>
    )
};
