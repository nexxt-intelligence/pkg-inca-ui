import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './index';

export default {
    title: 'UI/Navigation/Tabs',
    component: Tabs,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['default', 'outline', 'pills'],
            table: { defaultValue: { summary: 'default' } }
        },
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    }
} as Meta<typeof Tabs>;

const tabs = [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' }
];

const panels = (
    <>
        <Tabs.Panel value="first" pt="xs">
            First tab content
        </Tabs.Panel>
        <Tabs.Panel value="second" pt="xs">
            Second tab content
        </Tabs.Panel>
        <Tabs.Panel value="third" pt="xs">
            Third tab content
        </Tabs.Panel>
    </>
);

export const Default: StoryObj<typeof Tabs> = {
    args: {
        tabs,
        defaultValue: 'first',
        children: panels
    }
};

export const Variants: StoryObj<typeof Tabs> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {(['default', 'outline', 'pills'] as const).map((variant) => (
                <div key={variant}>
                    <p
                        style={{
                            fontSize: 11,
                            color: '#868e96',
                            marginBottom: 8
                        }}
                    >
                        {variant}
                    </p>
                    <Tabs tabs={tabs} defaultValue="first" variant={variant}>
                        {panels}
                    </Tabs>
                </div>
            ))}
        </div>
    )
};
