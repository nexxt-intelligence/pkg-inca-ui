import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import {
    Prism,
    RichTextEditor,
    type RichTextEditorProps,
    Stack,
    Switch
} from '../..';
import StoryLabel from '../../docs/StoryLabel';

const meta = {
    args: {
        label: 'Message',
        placeholder: 'Type your message here...'
    },
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        tooltip: { control: 'text' }
    },
    component: RichTextEditor,
    title: 'Components/RichTextEditor'
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

const ImageExample = (args: RichTextEditorProps) => {
    const [readOnly, setReadOnly] = useState(false);
    const [blurredHtml, setBlurredHtml] = useState('');

    return (
        <Stack maw={640} spacing="sm">
            <Switch
                checked={readOnly}
                label="Read only"
                onChange={(event) => setReadOnly(event.currentTarget.checked)}
            />
            <RichTextEditor
                {...args}
                defaultValue="<p>Choose an image, select it to replace it, or drag a resize handle.</p>"
                onBlur={setBlurredHtml}
                onImageUpload={async (file) => URL.createObjectURL(file)}
                readOnly={readOnly}
            />
            <StoryLabel>HTML returned by onBlur</StoryLabel>
            <Prism language="markup">{blurredHtml}</Prism>
        </Stack>
    );
};

export const WithImages: Story = {
    render: (args) => <ImageExample {...args} />
};
