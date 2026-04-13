import type { Meta, StoryObj } from '@storybook/react';

import RichTextEditor from './index';

export default {
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        tooltip: { control: 'text' }
    },
    component: RichTextEditor,
    title: 'Components/RichTextEditor'
} as Meta<typeof RichTextEditor>;

export const Default: StoryObj<typeof RichTextEditor> = {
    args: {
        label: 'Message',
        placeholder: 'Type your message here...'
    }
};
