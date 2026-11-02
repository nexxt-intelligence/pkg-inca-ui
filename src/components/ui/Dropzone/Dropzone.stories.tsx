import type { Meta, StoryObj } from '@storybook/react';

import { IMAGE_MIME_TYPE } from '@mantine/dropzone';

import { Dropzone } from '../../..';

const meta = {
    args: {
        accept: IMAGE_MIME_TYPE,
        maxSize: 5 * 1024 ** 2,
        onDrop: console.log,
        showImagePreview: true,
        size: 'sm'
    },
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
        showFilePreview: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
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
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithFilePreview: Story = {
    args: {
        maxSize: 5 * 1024 ** 2,
        multiple: false,
        onDrop: console.log,
        onRemove: () => console.log('removed'),
        showFilePreview: true,
        size: 'md',
        variant: 'file'
    }
};
