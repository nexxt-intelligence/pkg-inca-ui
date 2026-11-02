import type { Meta, StoryObj } from '@storybook/react';

import { AppShell, Icon } from '../../..';

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

const meta = {
    args: {
        activeLink: '/dashboard',
        children: 'Main content area',
        headerSubtitle: 'Hello, John!',
        headerTitle: 'Dashboard',
        isMobile: false,
        isNavbarOpen: true,
        navLinkItems: mockNavLinkItems,
        setActiveLink: (url: string) => console.log('Navigate to:', url),
        signOut: () => console.log('Sign out'),
        toggleNavbar: () => console.log('Toggle navbar'),
        userFirstName: 'John'
    },
    argTypes: {
        activeLink: { control: 'text' },
        headerSubtitle: { control: 'text' },
        headerTitle: { control: 'text' },
        isFixedHeader: { control: 'boolean' },
        isMobile: { control: 'boolean' },
        isNavbarOpen: { control: 'boolean' },
        showFooter: { control: 'boolean' },
        userFirstName: { control: 'text' },
        userProfilePicture: { control: 'text' }
    },
    component: AppShell,
    parameters: {
        layout: 'fullscreen'
    },
    title: 'UI/Layout/AppShell'
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
