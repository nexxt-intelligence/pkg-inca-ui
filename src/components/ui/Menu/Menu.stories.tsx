import type { Meta, StoryObj } from '@storybook/react';

import Button from '../Button';
import Icon from '../Icon';
import Menu from './index';

export default {
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
} as Meta<typeof Menu>;

export const Primary: StoryObj<typeof Menu> = {
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
    }
};
