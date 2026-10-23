import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

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

const ImageExample = () => {
    const [readOnly, setReadOnly] = useState(false);
    const [lastBlurredHtml, setLastBlurredHtml] = useState('');

    return (
        <div style={{ maxWidth: 640 }}>
            <button onClick={() => setReadOnly((current) => !current)}>
                {readOnly ? 'Edit' : 'View'}
            </button>
            <RichTextEditor
                defaultValue="<p>Choose an image, select it to replace it, or drag a resize handle.</p>"
                onBlur={setLastBlurredHtml}
                onImageUpload={async (file) => URL.createObjectURL(file)}
                readOnly={readOnly}
            />
            <p>Last content returned on blur:</p>
            <pre>{lastBlurredHtml}</pre>
        </div>
    );
};

export const ImagesAndReadOnly: StoryObj<typeof RichTextEditor> = {
    render: () => <ImageExample />
};
