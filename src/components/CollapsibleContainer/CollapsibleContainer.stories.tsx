import type { Meta, StoryObj } from '@storybook/react';

import CollapsibleContainer from './index';

export default {
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
} as Meta<typeof CollapsibleContainer>;

export const Primary: StoryObj<typeof CollapsibleContainer> = {
    args: {
        children: <div>Content inside the collapsible container.</div>,
        title: 'Collapsible Section'
    }
};
