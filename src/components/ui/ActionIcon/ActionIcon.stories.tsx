import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { TablerIconKeys } from '../Icon';
import ActionIcon from './index';

const columnStyle: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 6
};

const labelStyle: React.CSSProperties = { color: '#868e96', fontSize: 11 };

export default {
    args: {
        color: 'primary',
        disabled: false,
        icon: 'IconPlus' as TablerIconKeys,
        loading: false,
        size: 'sm',
        variant: 'filled'
    },
    argTypes: {
        color: {
            control: 'select',
            options: ['primary', 'red', 'green', 'gray', 'yellow', 'violet'],
            table: { defaultValue: { summary: 'primary' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        icon: {
            control: 'select',
            options: [
                'IconPlus',
                'IconPencil',
                'IconDotsVertical',
                'IconSettings',
                'IconTrash'
            ]
        },
        loading: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'sm' } }
        },
        variant: {
            control: 'radio',
            options: ['filled', 'subtle'],
            table: { defaultValue: { summary: 'filled' } }
        }
    },
    component: ActionIcon,
    title: 'UI/Buttons/ActionIcon'
} as Meta<typeof ActionIcon>;

export const Primary: StoryObj<typeof ActionIcon> = {};

export const Variants: StoryObj<typeof ActionIcon> = {
    argTypes: { variant: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 24 }}>
            {(['filled', 'subtle'] as const).map((variant) => (
                <div key={variant} style={columnStyle}>
                    <ActionIcon {...args} variant={variant} />
                    <span style={labelStyle}>{variant}</span>
                </div>
            ))}
        </div>
    )
};

export const Sizes: StoryObj<typeof ActionIcon> = {
    argTypes: { size: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 24 }}>
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <div key={size} style={columnStyle}>
                    <ActionIcon {...args} size={size} variant="filled" />
                    <span style={labelStyle}>{size}</span>
                </div>
            ))}
        </div>
    )
};

export const Colors: StoryObj<typeof ActionIcon> = {
    argTypes: { color: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 24 }}>
            {(
                ['primary', 'red', 'green', 'gray', 'yellow', 'violet'] as const
            ).map((color) => (
                <div key={color} style={columnStyle}>
                    <ActionIcon
                        {...args}
                        color={color}
                        size="md"
                        variant="filled"
                    />
                    <ActionIcon
                        {...args}
                        color={color}
                        size="md"
                        variant="subtle"
                    />
                    <span style={labelStyle}>{color}</span>
                </div>
            ))}
        </div>
    )
};
