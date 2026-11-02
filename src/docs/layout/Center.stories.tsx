import type { Meta, StoryObj } from '@storybook/react';

import { type CenterProps, Center as MantineCenter } from '../..';
import DemoBox from './DemoBox';

// Mantine components aren't processed by Storybook's docgen, so this local
// wrapper is what gives the docs page its props table. Apps import Center from 'inca-ui'.
/**
 * Mantine [Center](https://v6.mantine.dev/core/center/), re-exported unchanged.
 *
 * Centers its content vertically and horizontally.
 */
const Center = (props: CenterProps) => <MantineCenter {...props} />;

const meta = {
    args: {
        children: <DemoBox>Centered</DemoBox>,
        h: 120,
        inline: false
    },
    argTypes: {
        inline: { table: { defaultValue: { summary: 'false' } } },
        variant: { table: { disable: true } }
    },
    component: Center,
    title: 'UI/Layout/Center'
} satisfies Meta<typeof Center>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
