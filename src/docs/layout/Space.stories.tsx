import type { Meta, StoryObj } from '@storybook/react';

import { Space as MantineSpace, type SpaceProps, Text } from '../..';

const spacingKeys = [
    '3xs',
    '2xs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl'
] as const;

// Mantine components aren't processed by Storybook's docgen, so this local
// wrapper is what gives the docs page its props table. Apps import Space from 'inca-ui'.
/**
 * Mantine [Space](https://v6.mantine.dev/core/space/), re-exported unchanged.
 *
 * Adds empty space between elements: `h` for vertical, `w` for horizontal. Prefer `Stack` / `Group` gaps when you can.
 */
const Space = (props: SpaceProps) => <MantineSpace {...props} />;

const meta = {
    args: { h: 'md' },
    argTypes: {
        h: {
            control: 'select',
            description: 'Vertical space, key of the spacing scale or a number',
            options: spacingKeys,
            table: { defaultValue: { summary: '0' } }
        },
        w: {
            control: 'select',
            description:
                'Horizontal space, key of the spacing scale or a number',
            options: spacingKeys,
            table: { defaultValue: { summary: '0' } }
        }
    },
    component: Space,
    title: 'UI/Layout/Space'
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => (
        <>
            <Text>First line</Text>
            <Space {...args} />
            <Text>Second line</Text>
        </>
    )
};
