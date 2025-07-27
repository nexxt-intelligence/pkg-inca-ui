import type { Meta, StoryObj } from '@storybook/react';
import Menu from './index';
import Button from '../Button';
import Icon from '../Icon';

const meta: Meta<typeof Menu> = {
    title: 'UI/Menu',
    component: Menu,
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: 'select',
            options: ['bottom', 'top', 'left', 'right']
        },
        shadow: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        }
    }
};

export default meta;
type Story = StoryObj<typeof Menu>;

const defaultItems = [
    {
        label: 'Profile',
        icon: <Icon type="IconUser" size="sm" />
    },
    {
        label: 'Settings',
        icon: <Icon type="IconSettings" size="sm" />
    },
    {
        label: 'Logout',
        icon: <Icon type="IconLogout" size="sm" />,
        color: 'red'
    }
];

export const Default: Story = {
    args: {
        position: 'bottom',
        shadow: 'md',
        items: defaultItems,
        children: (
            <Button rightIcon={<Icon type="IconChevronDown" size="sm" />}>
                Open Menu
            </Button>
        )
    }
};

export const TopPosition: Story = {
    args: {
        ...Default.args,
        position: 'top'
    }
};

export const WithDisabledItems: Story = {
    args: {
        ...Default.args,
        items: [
            {
                label: 'Profile',
                icon: <Icon type="IconUser" size="sm" />
            },
            {
                label: 'Settings',
                icon: <Icon type="IconSettings" size="sm" />,
                disabled: true
            },
            {
                label: 'Logout',
                icon: <Icon type="IconLogout" size="sm" />,
                color: 'red'
            }
        ]
    }
};

export const WithOnClick: Story = {
    args: {
        ...Default.args,
        items: [
            {
                label: 'Profile',
                icon: <Icon type="IconUser" size="sm" />,
                onClick: () => console.log('Profile clicked')
            },
            {
                label: 'Settings',
                icon: <Icon type="IconSettings" size="sm" />,
                onClick: () => console.log('Settings clicked')
            },
            {
                label: 'Logout',
                icon: <Icon type="IconLogout" size="sm" />,
                color: 'red',
                onClick: () => console.log('Logout clicked')
            }
        ]
    }
};
