import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { type ContainerProps, Container as MantineContainer } from '../..';
import DemoBox from './DemoBox';

// Mantine components aren't processed by Storybook's docgen, so this local
// wrapper is what gives the docs page its props table. Apps import Container from 'inca-ui'.
/**
 * Mantine [Container](https://v6.mantine.dev/core/container/), re-exported unchanged.
 *
 * Centers content horizontally with a max width (`xs` 540px, `sm` 720px, `md` 960px, `lg` 1140px, `xl` 1320px) and side padding.
 */
const Container = (props: { children?: ReactNode } & ContainerProps) => (
    <MantineContainer {...props} />
);

const meta = {
    args: {
        children: <DemoBox>Container content</DemoBox>,
        fluid: false,
        size: 'sm'
    },
    argTypes: {
        fluid: { table: { defaultValue: { summary: 'false' } } },
        size: { control: 'radio', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        variant: { table: { disable: true } }
    },
    component: Container,
    title: 'UI/Layout/Container'
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
