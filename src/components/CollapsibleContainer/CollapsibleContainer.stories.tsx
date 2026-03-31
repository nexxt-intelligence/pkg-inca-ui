import type { Meta, StoryObj } from '@storybook/react';
import CollapsibleContainer from './index';

export default {
    title: 'Components/CollapsibleContainer',
    component: CollapsibleContainer,
    argTypes: {
        title: { control: 'text' },
        defaultOpen: { control: 'boolean' },
        tooltip: { control: 'text' },
        tooltipType: {
            control: 'radio',
            options: ['info', 'warning']
        },
        description: { control: 'text' }
    }
} as Meta<typeof CollapsibleContainer>;

export const Primary: StoryObj<typeof CollapsibleContainer> = {
    args: {
        title: 'Collapsible Section',
        children: <div>Content inside the collapsible container.</div>
    }
};
