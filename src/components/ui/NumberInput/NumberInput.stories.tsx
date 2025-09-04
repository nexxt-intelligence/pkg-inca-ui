import type { Meta, StoryObj } from '@storybook/react';
import NumberInput from './index';

const meta: Meta<typeof NumberInput> = {
    title: 'UI/NumberInput',
    component: NumberInput,
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

export const Default: StoryObj<typeof NumberInput> = {
    args: {
        label: 'Default Input',
        placeholder: 'Enter text here',
        tooltip: 'This is a tooltip'
    },
    render: (args) => <NumberInput {...args} />
};
