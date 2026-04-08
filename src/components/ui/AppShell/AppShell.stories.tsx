import { Meta, StoryObj } from '@storybook/react';

import Icon from '../Icon';
import AppShell from './index';

export default {
    argTypes: {
        activeLink: { control: 'text' },
        headerSubtitle: { control: 'text' },
        headerTitle: { control: 'text' },
        isFixedHeader: { control: 'boolean' },
        isMobile: { control: 'boolean' },
        isNavbarOpen: { control: 'boolean' },
        userFirstName: { control: 'text' },
        userProfilePicture: { control: 'text' }
    },
    component: AppShell,
    parameters: {
        layout: 'fullscreen'
    },
    title: 'UI/Layout/AppShell'
} as Meta<typeof AppShell>;

const mockNavLinkItems = [
    {
        icon: <Icon size="md" type="IconDashboard" />,
        label: 'Dashboard',
        url: '/dashboard'
    },
    {
        icon: <Icon size="md" type="IconFolder" />,
        label: 'Projects',
        url: '/projects'
    },
    {
        icon: <Icon size="md" type="IconSettings" />,
        label: 'Settings',
        url: '/settings'
    }
];

export const Primary: StoryObj<typeof AppShell> = {
    args: {
        activeLink: '/dashboard',
        children: <div style={{ padding: '20px' }}>Main content area</div>,
        headerSubtitle: 'Hello, John!',
        headerTitle: 'Dashboard',
        isMobile: false,
        isNavbarOpen: true,
        navLinkItems: mockNavLinkItems,
        setActiveLink: (url: string) => console.log('Navigate to:', url),
        signOut: () => console.log('Sign out'),
        toggleNavbar: () => console.log('Toggle navbar'),
        userFirstName: 'John'
    }
};
