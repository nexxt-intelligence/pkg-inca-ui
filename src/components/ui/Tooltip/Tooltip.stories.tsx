import { Meta, StoryObj } from '@storybook/react';

import Button from '../Button';
import Tooltip from './index';

export default {
    argTypes: {
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        label: { control: 'text' },
        multiline: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        },
        opened: { control: 'boolean' },
        position: {
            control: 'radio',
            options: ['top', 'bottom', 'left', 'right'],
            table: { defaultValue: { summary: 'top' } }
        },
        withArrow: {
            control: 'boolean',
            table: { defaultValue: { summary: 'true' } }
        }
    },
    component: Tooltip,
    title: 'UI/Overlays/Tooltip'
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
