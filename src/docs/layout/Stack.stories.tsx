import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { Stack as MantineStack, type StackProps } from '../..';
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
// wrapper is what gives the docs page its props table. Apps import Stack from 'inca-ui'.
/**
 * Mantine [Stack](https://v6.mantine.dev/core/stack/), re-exported unchanged.
 *
 * Stacks children vertically, with a gap from the spacing scale.
 */
const Stack = (props: { children?: ReactNode } & StackProps) => (
    <MantineStack {...props} />
);

const meta = {
    args: {
        align: 'stretch',
        children: ['1', '2', '3'].map((item) => (
            <DemoBox key={item}>{item}</DemoBox>
        )),
        justify: 'flex-start',
        spacing: 'md'
    },
    argTypes: {
        align: {
            control: 'select',
            options: ['stretch', 'flex-start', 'center', 'flex-end'],
            table: { defaultValue: { summary: 'stretch' } }
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
        spacing: {
            control: 'select',
            options: spacingKeys,
            table: { defaultValue: { summary: 'md' } }
        },
        variant: { table: { disable: true } }
    },
    component: Stack,
    title: 'UI/Layout/Stack'
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
