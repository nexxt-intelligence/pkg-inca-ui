import type { Meta, StoryObj } from '@storybook/react';

import { AnnouncementBar } from '../..';

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

const meta = {
    args: { statusUrl: sampleStatusUrl },
    argTypes: { statusUrl: { control: false } },
    component: AnnouncementBar,
    title: 'Components/AnnouncementBar'
} satisfies Meta<typeof AnnouncementBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The sample has `message: null`, so it shows the default message built from `startUtc` and `endUtc`. */
export const Primary: Story = {};
