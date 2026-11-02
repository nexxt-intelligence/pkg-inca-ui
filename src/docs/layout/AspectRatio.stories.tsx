import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import {
    type AspectRatioProps,
    AspectRatio as MantineAspectRatio
} from '../..';
import DemoBox from './DemoBox';

// Mantine components aren't processed by Storybook's docgen, so this local
// wrapper is what gives the docs page its props table. Apps import AspectRatio from 'inca-ui'.
/**
 * Mantine [AspectRatio](https://v6.mantine.dev/core/aspect-ratio/), re-exported unchanged.
 *
 * Keeps its content at a fixed width/height ratio, e.g. for images, videos and maps.
 */
const AspectRatio = (props: { children?: ReactNode } & AspectRatioProps) => (
    <MantineAspectRatio {...props} />
);

const meta = {
    args: {
        children: <DemoBox>16 / 9</DemoBox>,
        maw: 320,
        ratio: 16 / 9
    },
    argTypes: { variant: { table: { disable: true } } },
    component: AspectRatio,
    title: 'UI/Layout/AspectRatio'
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
