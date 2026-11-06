import type { Meta, StoryObj } from '@storybook/react';

import { AnnouncementBar, AppShell, Icon } from '../../..';

// Temporary example for Storybook: a sample /status.json served as a data: URL, so the
// banner's real fetch runs. A new id on each load, so closing it here isn't remembered.
const sampleStatusUrl = `data:application/json,${encodeURIComponent(
    JSON.stringify({
        bannerActive: true,
        blockActive: false,
        endUtc: '2026-12-01T18:00:00Z',
        id: `storybook-${Date.now()}`,
        message: null,
        startUtc: '2026-12-01T17:00:00Z'
    })
)}`;

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

export const WithAnnouncement: Story = {
    args: {
        announcement: <AnnouncementBar statusUrl={sampleStatusUrl} />
    }
};
