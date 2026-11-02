import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { type GroupProps, Group as MantineGroup } from '../..';
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
// wrapper is what gives the docs page its props table. Apps import Group from 'inca-ui'.
/**
 * Mantine [Group](https://v6.mantine.dev/core/group/), re-exported unchanged.
 *
 * Lays children out in a row, with a gap from the spacing scale.
 */
const Group = (props: { children?: ReactNode } & GroupProps) => (
    <MantineGroup {...props} />
);

const meta = {
    args: {
        children: ['1', '2', '3'].map((item) => (
            <DemoBox key={item}>{item}</DemoBox>
        )),
        grow: false,
        noWrap: false,
        position: 'left',
        spacing: 'md'
    },
    argTypes: {
        align: {
            control: 'select',
            options: ['stretch', 'flex-start', 'center', 'flex-end'],
            table: { defaultValue: { summary: 'center' } }
        },
        grow: { table: { defaultValue: { summary: 'false' } } },
        noWrap: { table: { defaultValue: { summary: 'false' } } },
        position: {
            control: 'radio',
            options: ['left', 'center', 'right', 'apart'],
            table: { defaultValue: { summary: 'left' } }
        },
        spacing: {
            control: 'select',
            options: spacingKeys,
            table: { defaultValue: { summary: 'md' } }
        },
        variant: { table: { disable: true } }
    },
    component: Group,
    title: 'UI/Layout/Group'
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
