import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { type FlexProps, Flex as MantineFlex } from '../..';
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
// wrapper is what gives the docs page its props table. Apps import Flex from 'inca-ui'.
/**
 * Mantine [Flex](https://v6.mantine.dev/core/flex/), re-exported unchanged.
 *
 * A flexbox container. Every flex property is a prop, and `gap` uses the spacing scale. Prefer `Stack` / `Group` for simple columns and rows.
 */
const Flex = (props: { children?: ReactNode } & FlexProps) => (
    <MantineFlex {...props} />
);

const meta = {
    args: {
        children: ['1', '2', '3'].map((item) => (
            <DemoBox key={item}>{item}</DemoBox>
        )),
        direction: 'row',
        gap: 'md'
    },
    argTypes: {
        align: {
            control: 'select',
            options: ['stretch', 'flex-start', 'center', 'flex-end']
        },
        columnGap: { control: 'select', options: spacingKeys },
        direction: {
            control: 'radio',
            options: ['row', 'column', 'row-reverse', 'column-reverse']
        },
        gap: { control: 'select', options: spacingKeys },
        justify: {
            control: 'select',
            options: [
                'flex-start',
                'center',
                'flex-end',
                'space-between',
                'space-around'
            ]
        },
        rowGap: { control: 'select', options: spacingKeys },
        wrap: { control: 'radio', options: ['nowrap', 'wrap', 'wrap-reverse'] }
    },
    component: Flex,
    title: 'UI/Layout/Flex'
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
