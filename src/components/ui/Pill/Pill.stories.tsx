import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import Pill, { PillGroup } from './index';

const columnStyle: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 6
};

const labelStyle: React.CSSProperties = {
    color: 'var(--text-subtle)',
    fontSize: 11
};

export default {
    args: {
        children: 'Pill',
        disabled: false,
        size: 'sm',
        variant: 'default',
        withRemoveButton: false
    },
    argTypes: {
        children: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg'],
            table: { defaultValue: { summary: 'sm' } }
        },
        variant: {
            control: 'radio',
            options: ['default', 'contrast'],
            table: { defaultValue: { summary: 'default' } }
        },
        withRemoveButton: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    component: Pill,
    title: 'UI/Data Display/Pill'
} as Meta<typeof Pill>;

export const Primary: StoryObj<typeof Pill> = {};

export const Variants: StoryObj<typeof Pill> = {
    argTypes: { variant: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 16 }}>
            {(['default', 'contrast'] as const).map((variant) => (
                <div key={variant} style={columnStyle}>
                    <Pill {...args} variant={variant}>
                        {args.children}
                    </Pill>
                    <span style={labelStyle}>{variant}</span>
                </div>
            ))}
        </div>
    )
};

export const Sizes: StoryObj<typeof Pill> = {
    argTypes: { size: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 16 }}>
            {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
                <div key={size} style={columnStyle}>
                    <Pill {...args} size={size}>
                        {args.children}
                    </Pill>
                    <span style={labelStyle}>{size}</span>
                </div>
            ))}
        </div>
    )
};

export const Removable: StoryObj<typeof Pill> = {
    args: {
        withRemoveButton: true
    },
    render: (args) => (
        <Pill {...args} onRemove={() => undefined}>
            {args.children}
        </Pill>
    )
};

export const Group: StoryObj<typeof Pill> = {
    render: (args) => (
        <PillGroup>
            <Pill {...args}>Research</Pill>
            <Pill {...args}>Analysis</Pill>
            <Pill {...args} withRemoveButton>
                Removable
            </Pill>
        </PillGroup>
    )
};
