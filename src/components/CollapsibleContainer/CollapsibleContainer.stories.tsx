import type { Meta, StoryObj } from '@storybook/react';

import { CollapsibleContainer } from '../..';

const meta = {
    args: {
        children: <div>Content inside the collapsible container.</div>,
        title: 'Collapsible Section'
    },
    argTypes: {
        defaultOpen: { control: 'boolean' },
        description: { control: 'text' },
        title: { control: 'text' },
        tooltip: { control: 'text' },
        tooltipType: {
            control: 'radio',
            options: ['info', 'warning']
        }
    },
    component: CollapsibleContainer,
    title: 'Components/CollapsibleContainer'
} satisfies Meta<typeof CollapsibleContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
