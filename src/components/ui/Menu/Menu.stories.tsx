import type { Meta, StoryObj } from '@storybook/react';

import { Button, Icon, Menu } from '../../..';

const meta = {
    args: {
        children: <Button>Open Menu</Button>,
        items: [
            { icon: <Icon size="sm" type="IconUser" />, label: 'Profile' },
            { icon: <Icon size="sm" type="IconSettings" />, label: 'Settings' },
            {
                color: 'red',
                icon: <Icon size="sm" type="IconLogout" />,
                label: 'Logout'
            }
        ],
        position: 'bottom',
        shadow: 'md'
    },
    argTypes: {
        position: {
            control: 'radio',
            options: ['bottom', 'top', 'left', 'right'],
            table: { defaultValue: { summary: 'bottom' } }
        },
        shadow: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'md' } }
        }
    },
    component: Menu,
    title: 'UI/Overlays/Menu'
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
