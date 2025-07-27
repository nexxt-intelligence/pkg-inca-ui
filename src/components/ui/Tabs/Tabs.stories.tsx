import type { Meta, StoryObj } from '@storybook/react';
import TabPanels from './index';
import { Tabs } from '@mantine/core';

const meta: Meta<typeof TabPanels> = {
    title: 'UI/Tabs',
    component: TabPanels,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TabPanels>;

const tabs = [
    { label: 'First Tab', value: 'first' },
    { label: 'Second Tab', value: 'second' },
    { label: 'Third Tab', value: 'third' }
];

export const Default: Story = {
    args: {
        tabs,
        defaultValue: 'first',
        children: (
            <Tabs.List>
                <Tabs.Panel value="first">First</Tabs.Panel>
                <Tabs.Panel value="second">Second</Tabs.Panel>
                <Tabs.Panel value="third">Third</Tabs.Panel>
            </Tabs.List>
        )
    }
};

export const WithCustomContent: Story = {
    args: {
        tabs,
        defaultValue: 'second',
        children: (
            <Tabs.List>
                <Tabs.Panel value="first">
                    <div
                        style={{
                            padding: '20px',
                            backgroundColor: '#f0f0f0'
                        }}
                    >
                        <h3>Custom Content 1</h3>
                        <p>This is some custom content for the first tab.</p>
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="second">
                    <div
                        style={{
                            padding: '20px',
                            backgroundColor: '#e0e0e0'
                        }}
                    >
                        <h3>Custom Content 2</h3>
                        <p>This is some custom content for the second tab.</p>
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="third">
                    <div
                        style={{
                            padding: '20px',
                            backgroundColor: '#d0d0d0'
                        }}
                    >
                        <h3>Custom Content 3</h3>
                        <p>This is some custom content for the third tab.</p>
                    </div>
                </Tabs.Panel>
            </Tabs.List>
        )
    }
};
