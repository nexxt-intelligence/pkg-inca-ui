import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ActionIcon from './index';
import { TablerIconKeys } from '../Icon';

const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6
};

const labelStyle: React.CSSProperties = { fontSize: 11, color: '#868e96' };

export default {
    title: 'UI/Buttons/ActionIcon',
    component: ActionIcon,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['filled', 'subtle'],
            table: { defaultValue: { summary: 'filled' } }
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'sm' } }
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
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        loading: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        color: {
            control: 'select',
            options: ['primary', 'red', 'green', 'gray', 'yellow', 'violet'],
            table: { defaultValue: { summary: 'primary' } }
        }
    },
    args: {
        disabled: false,
        loading: false,
        variant: 'filled',
        size: 'sm',
        icon: 'IconPlus' as TablerIconKeys,
        color: 'primary'
    }
} as Meta<typeof ActionIcon>;

export const Primary: StoryObj<typeof ActionIcon> = {};

export const Variants: StoryObj<typeof ActionIcon> = {
    argTypes: { variant: { table: { disable: true } } },
    render: (args) => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
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
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <div key={size} style={columnStyle}>
                    <ActionIcon {...args} variant="filled" size={size} />
                    <span style={labelStyle}>{size}</span>
                </div>
            ))}
        </div>
    )
};

export const Colors: StoryObj<typeof ActionIcon> = {
    argTypes: { color: { table: { disable: true } } },
    render: (args) => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
            {(
                ['primary', 'red', 'green', 'gray', 'yellow', 'violet'] as const
            ).map((color) => (
                <div key={color} style={columnStyle}>
                    <ActionIcon
                        {...args}
                        variant="filled"
                        size="md"
                        color={color}
                    />
                    <ActionIcon
                        {...args}
                        variant="subtle"
                        size="md"
                        color={color}
                    />
                    <span style={labelStyle}>{color}</span>
                </div>
            ))}
        </div>
    )
};
