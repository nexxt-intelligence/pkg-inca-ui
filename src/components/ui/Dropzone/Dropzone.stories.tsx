import type { Meta, StoryObj } from '@storybook/react';

import { IMAGE_MIME_TYPE } from '@mantine/dropzone';

import Dropzone from './index';

export default {
    argTypes: {
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        loading: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        maxSize: { control: 'number' },
        multiple: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        },
        showImagePreview: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        },
        showMetadataHelpers: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        size: {
            control: 'select',
            options: ['sm', 'md'],
            table: { defaultValue: { summary: 'sm' } }
        },
        variant: {
            control: 'select',
            options: ['file', 'media'],
            table: { defaultValue: { summary: 'file' } }
        }
    },
    component: Dropzone,
    title: 'UI/Other Packages/Dropzone'
} as Meta<typeof Dropzone>;

export const Primary: StoryObj<typeof Dropzone> = {
    args: {
        accept: IMAGE_MIME_TYPE,
        maxSize: 5 * 1024 ** 2,
        onDrop: console.log,
        showImagePreview: true,
        size: 'sm'
    }
};
