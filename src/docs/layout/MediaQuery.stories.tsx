import type { Meta, StoryObj } from '@storybook/react';

import { MediaQuery as MantineMediaQuery, type MediaQueryProps } from '../..';
import DemoBox from './DemoBox';

// Mantine components aren't processed by Storybook's docgen, so this local
// wrapper is what gives the docs page its props table. Apps import MediaQuery from 'inca-ui'.
/**
 * Mantine [MediaQuery](https://v6.mantine.dev/core/media-query/), re-exported unchanged.
 *
 * Applies `styles` to its child when the viewport matches `smallerThan`, `largerThan` or `query`. **v7 only**: Mantine 9 removed it, so use `hiddenFrom` / `visibleFrom` on `main`.
 */
const MediaQuery = (props: MediaQueryProps) => <MantineMediaQuery {...props} />;

const meta = {
    args: {
        children: (
            <DemoBox>Hidden when the viewport is smaller than sm</DemoBox>
        ),
        smallerThan: 'sm',
        styles: { display: 'none' }
    },
    argTypes: {
        largerThan: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        smallerThan: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        styles: {
            control: 'object',
            description: 'Styles applied to the child when the query matches'
        }
    },
    component: MediaQuery,
    title: 'UI/Layout/MediaQuery'
} satisfies Meta<typeof MediaQuery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
