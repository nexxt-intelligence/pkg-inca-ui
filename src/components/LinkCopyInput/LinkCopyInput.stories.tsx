import type { Meta, StoryObj } from '@storybook/react';

import LinkCopyInput from './index';

export default {
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' }
    },
    component: LinkCopyInput,
    title: 'Components/LinkCopyInput'
} as Meta<typeof LinkCopyInput>;

export const Primary: StoryObj<typeof LinkCopyInput> = {
    args: {
        label: 'Shareable Link',
        value: 'https://example.com/'
    },
    render: (args) => (
        <div style={{ maxWidth: 640 }}>
            <LinkCopyInput {...args} />
        </div>
    )
};
