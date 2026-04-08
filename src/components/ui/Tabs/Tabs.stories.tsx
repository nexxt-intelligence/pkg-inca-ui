import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './index';

export default {
    argTypes: {
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        variant: {
            control: 'radio',
            options: ['default', 'outline', 'pills', 'contained'],
            table: { defaultValue: { summary: 'default' } }
        }
    },
    component: Tabs,
    title: 'UI/Navigation/Tabs'
} as Meta<typeof Tabs>;

const tabs = [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' }
];

const panels = (
    <>
        <Tabs.Panel pt="xs" value="first">
            First tab content
        </Tabs.Panel>
        <Tabs.Panel pt="xs" value="second">
            Second tab content
        </Tabs.Panel>
        <Tabs.Panel pt="xs" value="third">
            Third tab content
        </Tabs.Panel>
    </>
);

export const Default: StoryObj<typeof Tabs> = {
    args: {
        children: panels,
        defaultValue: 'first',
        tabs
    }
};

export const Variants: StoryObj<typeof Tabs> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {(['default', 'outline', 'pills', 'contained'] as const).map(
                (variant) => (
                    <div key={variant}>
                        <p
                            style={{
                                color: '#868e96',
                                fontSize: 11,
                                marginBottom: 8
                            }}
                        >
                            {variant}
                        </p>
                        <Tabs
                            defaultValue="first"
                            tabs={tabs}
                            variant={variant}
                        >
                            {panels}
                        </Tabs>
                    </div>
                )
            )}
        </div>
    )
};
