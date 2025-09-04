import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './index';

const meta: Meta<typeof TextArea> = {
    title: 'UI/TextArea',
    component: TextArea,
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

export const Default: StoryObj<typeof TextArea> = {
    args: {
        label: 'Default Input',
        placeholder: 'Enter text here',
        tooltip: 'This is a tooltip'
        // variant: 'filled'
    },
    render: (args) => <TextArea {...args} />
};
