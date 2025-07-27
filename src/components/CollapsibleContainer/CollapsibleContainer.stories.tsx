import type { Meta, StoryObj } from '@storybook/react';
import CollapsibleContainer from './index';

const meta: Meta<typeof CollapsibleContainer> = {
    title: 'Components/CollapsibleContainer',
    component: CollapsibleContainer,
    parameters: {},
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CollapsibleContainer>;

export const Default: Story = {
    args: {
        title: 'Collapsible Section',
        children: (
            <div>
                This is the content inside the collapsible container. Click the
                chevron icon to toggle visibility.
            </div>
        )
    }
};

export const WithLongContent: Story = {
    args: {
        title: 'Section with Long Content',
        children: (
            <div>
                <p>
                    This is a longer content section that demonstrates how the
                    container handles more content.
                </p>
                <p>You can put any content here, including:</p>
                <ul>
                    <li>Lists</li>
                    <li>Images</li>
                    <li>Forms</li>
                    <li>Other components</li>
                </ul>
            </div>
        )
    }
};

export const WithCustomTitle: Story = {
    args: {
        title: '🔒 Secure Section',
        children: (
            <div>
                This section demonstrates how the container looks with a custom
                title that includes an emoji.
            </div>
        )
    }
};
