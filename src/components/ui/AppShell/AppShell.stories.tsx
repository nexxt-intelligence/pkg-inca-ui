import AppShell from './index';
import { Meta, StoryObj } from '@storybook/react';
import Icon from '../Icon';

export default {
    title: 'UI/AppShell',
    component: AppShell,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        activeLink: { control: 'text' },
        isMobile: { control: 'boolean' },
        isNavbarOpen: { control: 'boolean' },
        userFirstName: { control: 'text' },
        userProfilePicture: { control: 'text' }
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
        label: 'Analytics',
        icon: <Icon type="IconChartBar" size="md" />,
        url: '/analytics'
    },
    {
        label: 'Settings',
        icon: <Icon type="IconSettings" size="md" />,
        url: '/settings'
    }
];

export const Default: StoryObj<typeof AppShell> = {
    args: {
        navLinkItems: mockNavLinkItems,
        activeLink: '/dashboard',
        setActiveLink: (url: string) => console.log('Navigate to:', url),
        isMobile: false,
        isNavbarOpen: true,
        toggleNavbar: () => console.log('Toggle navbar'),
        signOut: () => console.log('Sign out'),
        openFeedback: () => console.log('Open feedback'),
        openHelp: () => console.log('Open help'),
        userFirstName: 'John',
        children: <div style={{ padding: '20px' }}>Main content area</div>
    }
};

export const Mobile: StoryObj<typeof AppShell> = {
    args: {
        ...Default.args,
        isMobile: true,
        isNavbarOpen: false
    }
};

export const WithUserProfile: StoryObj<typeof AppShell> = {
    args: {
        ...Default.args,
        userFirstName: 'Jane Doe',
        userProfilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b12c?w=32&h=32&fit=crop&crop=face'
    }
};

export const NavbarClosed: StoryObj<typeof AppShell> = {
    args: {
        ...Default.args,
        isNavbarOpen: false
    }
};