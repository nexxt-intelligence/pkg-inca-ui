import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './index';

const meta: Meta<typeof TextInput> = {
    title: 'UI/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['default', 'filled', 'unstyled']
        }
    },
    tags: ['autodocs']
};

export default meta;

export const Default: StoryObj<typeof TextInput> = {
    args: {
        label: 'Default Input',
        placeholder: 'Enter text here',
        tooltip: 'This is a tooltip'
    },
    render: (args) => <TextInput {...args} />
};
