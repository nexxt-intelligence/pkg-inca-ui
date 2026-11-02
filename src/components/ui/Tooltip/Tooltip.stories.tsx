import type { Meta, StoryObj } from '@storybook/react';

import { Button, Center, Tooltip } from '../../..';

const meta = {
    args: {
        children: <Button>Hover me</Button>,
        label: 'This is a tooltip',
        position: 'top'
    },
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
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => (
        <Center h="10vh">
            <Tooltip {...args} />
        </Center>
    )
};

export const Floating: StoryObj<typeof Tooltip.Floating> = {
    args: {
        label: 'This is a floating tooltip'
    },
    render: (args) => (
        <Center h="10vh">
            <Tooltip.Floating {...args}>
                <Button>Hover me</Button>
            </Tooltip.Floating>
        </Center>
    )
};
