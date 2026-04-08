import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import Badge from './index';

const columnStyle: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 6
};

const labelStyle: React.CSSProperties = { color: '#868e96', fontSize: 11 };

export default {
    args: {
        children: 'Badge',
        color: 'blue',
        fullWidth: false,
        size: 'md',
        variant: 'filled'
    },
    argTypes: {
        children: { control: 'text' },
        color: {
            control: 'select',
            options: ['blue', 'green', 'yellow', 'red', 'dark', 'violet'],
            table: { defaultValue: { summary: 'blue' } }
        },
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        size: {
            control: 'radio',
            options: ['sm', 'md'],
            table: { defaultValue: { summary: 'md' } }
        },
        variant: {
            control: 'radio',
            options: ['filled', 'light', 'outline', 'dot'],
            table: { defaultValue: { summary: 'filled' } }
        }
    },
    component: Badge,
    title: 'UI/Data Display/Badge'
} as Meta<typeof Badge>;

export const Primary: StoryObj<typeof Badge> = {};

export const Variants: StoryObj<typeof Badge> = {
    argTypes: { variant: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 16 }}>
            {(['filled', 'light', 'outline', 'dot'] as const).map((variant) => (
                <div key={variant} style={columnStyle}>
                    <Badge {...args} variant={variant}>
                        {args.children}
                    </Badge>
                    <span style={labelStyle}>{variant}</span>
                </div>
            ))}
        </div>
    )
};

export const Sizes: StoryObj<typeof Badge> = {
    argTypes: { size: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 16 }}>
            {(['sm', 'md'] as const).map((size) => (
                <div key={size} style={columnStyle}>
                    <Badge {...args} size={size}>
                        {args.children}
                    </Badge>
                    <span style={labelStyle}>{size}</span>
                </div>
            ))}
        </div>
    )
};

export const Colors: StoryObj<typeof Badge> = {
    argTypes: { color: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 16 }}>
            {(
                ['blue', 'green', 'yellow', 'red', 'dark', 'violet'] as const
            ).map((color) => (
                <div key={color} style={columnStyle}>
                    <Badge {...args} color={color}>
                        {args.children}
                    </Badge>
                    <span style={labelStyle}>{color}</span>
                </div>
            ))}
        </div>
    )
};
