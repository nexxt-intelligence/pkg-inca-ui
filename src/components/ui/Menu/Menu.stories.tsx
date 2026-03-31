import type { Meta, StoryObj } from '@storybook/react';
import Menu from './index';
import Button from '../Button';
import Icon from '../Icon';

export default {
    title: 'UI/Overlays/Menu',
    component: Menu,
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
    }
} as Meta<typeof Menu>;

export const Primary: StoryObj<typeof Menu> = {
    args: {
        position: 'bottom',
        shadow: 'md',
        items: [
            { label: 'Profile', icon: <Icon type="IconUser" size="sm" /> },
            { label: 'Settings', icon: <Icon type="IconSettings" size="sm" /> },
            {
                label: 'Logout',
                icon: <Icon type="IconLogout" size="sm" />,
                color: 'red'
            }
        ],
        children: <Button>Open Menu</Button>
    }
};
