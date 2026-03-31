import Tooltip from './index';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

export default {
    title: 'UI/Overlays/Tooltip',
    component: Tooltip,
    argTypes: {
        label: { control: 'text' },
        position: {
            control: 'radio',
            options: ['top', 'bottom', 'left', 'right'],
            table: { defaultValue: { summary: 'top' } }
        },
        withArrow: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        },
        multiline: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        },
        opened: { control: 'boolean' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    }
} as Meta<typeof Tooltip>;

export const Primary: StoryObj<typeof Tooltip> = {
    args: {
        label: 'This is a tooltip'
    },
    render: (args) => (
        <Tooltip {...args}>
            <Button>Hover me</Button>
        </Tooltip>
    )
};
