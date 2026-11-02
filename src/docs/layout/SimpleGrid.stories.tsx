import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { SimpleGrid as MantineSimpleGrid, type SimpleGridProps } from '../..';
import DemoBox from './DemoBox';

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
// wrapper is what gives the docs page its props table. Apps import SimpleGrid from 'inca-ui'.
/**
 * Mantine [SimpleGrid](https://v6.mantine.dev/core/simple-grid/), re-exported unchanged.
 *
 * Equal-width columns. Set `cols`, and use `breakpoints` to change the columns on smaller screens.
 */
const SimpleGrid = (props: { children?: ReactNode } & SimpleGridProps) => (
    <MantineSimpleGrid {...props} />
);

const meta = {
    args: {
        children: ['1', '2', '3', '4', '5', '6'].map((item) => (
            <DemoBox key={item}>{item}</DemoBox>
        )),
        cols: 3,
        spacing: 'md'
    },
    argTypes: {
        cols: { table: { defaultValue: { summary: '1' } } },
        spacing: {
            control: 'select',
            options: spacingKeys,
            table: { defaultValue: { summary: 'md' } }
        },
        variant: { table: { disable: true } },
        verticalSpacing: { control: 'select', options: spacingKeys }
    },
    component: SimpleGrid,
    title: 'UI/Layout/SimpleGrid'
} satisfies Meta<typeof SimpleGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Breakpoints: Story = {
    args: {
        breakpoints: [
            { cols: 2, maxWidth: 'md' },
            { cols: 1, maxWidth: 'sm' }
        ]
    }
};
