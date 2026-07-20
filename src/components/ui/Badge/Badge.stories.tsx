import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import Badge from './index';

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

const badgeColors = ['blue', 'green', 'yellow', 'red', 'dark', 'violet'] as const;
const badgeVariants = ['filled', 'light', 'outline', 'dot'] as const;

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
    argTypes: {
        color: { table: { disable: true } },
        variant: { table: { disable: true } }
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {badgeVariants.map((variant) => (
                <div
                    key={variant}
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        gap: 12
                    }}
                >
                    <span
                        style={{
                            ...labelStyle,
                            textAlign: 'right',
                            width: 48
                        }}
                    >
                        {variant}
                    </span>
                    {badgeColors.map((color) => (
                        <Badge
                            {...args}
                            color={color}
                            key={color}
                            variant={variant}
                        >
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </Badge>
                    ))}
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
            {badgeColors.map((color) => (
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
