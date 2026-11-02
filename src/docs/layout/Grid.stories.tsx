import type { Meta, StoryObj } from '@storybook/react';

import { type GridProps, Grid as MantineGrid } from '../..';
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
// wrapper is what gives the docs page its props table. Apps import Grid from 'inca-ui'.
/**
 * Mantine [Grid](https://v6.mantine.dev/core/grid/), re-exported unchanged.
 *
 * A 12-column grid. Put `Grid.Col` elements inside and set their `span` (plus `offset`, `order` and responsive `xs`–`xl` spans).
 */
const Grid = (props: GridProps) => <MantineGrid {...props} />;

const meta = {
    args: {
        align: 'stretch',
        children: [
            <MantineGrid.Col key="a" span={4}>
                <DemoBox>span 4</DemoBox>
            </MantineGrid.Col>,
            <MantineGrid.Col key="b" span={4}>
                <DemoBox>span 4</DemoBox>
            </MantineGrid.Col>,
            <MantineGrid.Col key="c" span={4}>
                <DemoBox>span 4</DemoBox>
            </MantineGrid.Col>
        ],
        columns: 12,
        grow: false,
        gutter: 'md',
        justify: 'flex-start'
    },
    argTypes: {
        align: {
            control: 'select',
            options: ['stretch', 'flex-start', 'center', 'flex-end'],
            table: { defaultValue: { summary: 'stretch' } }
        },
        columns: { table: { defaultValue: { summary: '12' } } },
        gutter: {
            control: 'select',
            options: spacingKeys,
            table: { defaultValue: { summary: 'md' } }
        },
        justify: {
            control: 'select',
            options: [
                'flex-start',
                'center',
                'flex-end',
                'space-between',
                'space-around'
            ],
            table: { defaultValue: { summary: 'flex-start' } }
        },
        variant: { table: { disable: true } }
    },
    component: Grid,
    title: 'UI/Layout/Grid'
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const ColumnSpans: Story = {
    args: {
        children: [
            <MantineGrid.Col key="a" span={3}>
                <DemoBox>span 3</DemoBox>
            </MantineGrid.Col>,
            <MantineGrid.Col key="b" span={6}>
                <DemoBox>span 6</DemoBox>
            </MantineGrid.Col>,
            <MantineGrid.Col key="c" offset={1} span={2}>
                <DemoBox>span 2, offset 1</DemoBox>
            </MantineGrid.Col>
        ]
    }
};
