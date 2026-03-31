import AppShell from './index';
import { Meta, StoryObj } from '@storybook/react';
import Icon from '../Icon';

export default {
    title: 'UI/Layout/AppShell',
    component: AppShell,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        activeLink: { control: 'text' },
        isMobile: { control: 'boolean' },
        isNavbarOpen: { control: 'boolean' },
        userFirstName: { control: 'text' },
        userProfilePicture: { control: 'text' },
        headerTitle: { control: 'text' },
        headerSubtitle: { control: 'text' },
        isFixedHeader: { control: 'boolean' }
    }
} as Meta<typeof AppShell>;

const mockNavLinkItems = [
    {
        label: 'Dashboard',
        icon: <Icon type="IconDashboard" size="md" />,
        url: '/dashboard'
    },
    {
        label: 'Projects',
        icon: <Icon type="IconFolder" size="md" />,
        url: '/projects'
    },
    {
        label: 'Settings',
        icon: <Icon type="IconSettings" size="md" />,
        url: '/settings'
    }
];

export const Primary: StoryObj<typeof AppShell> = {
    args: {
        navLinkItems: mockNavLinkItems,
        activeLink: '/dashboard',
        setActiveLink: (url: string) => console.log('Navigate to:', url),
        isMobile: false,
        isNavbarOpen: true,
        toggleNavbar: () => console.log('Toggle navbar'),
        signOut: () => console.log('Sign out'),
        userFirstName: 'John',
        headerTitle: 'Dashboard',
        headerSubtitle: 'Hello, John!',
        children: <div style={{ padding: '20px' }}>Main content area</div>
    }
};
