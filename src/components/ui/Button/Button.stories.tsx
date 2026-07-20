import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { TablerIconKeys } from '../Icon';
import Button from './index';

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

const buttonColors = [
    'blue',
    'green',
    'yellow',
    'red',
    'dark',
    'gray'
] as const;
const buttonSizes = ['xs', 'sm', 'md', 'compact-xs', 'compact-sm'] as const;
const buttonVariants = ['filled', 'subtle', 'outline'] as const;

export default {
    args: {
        children: 'Button',
        color: 'blue',
        compact: false,
        disabled: false,
        loading: false,
        size: 'sm',
        variant: 'filled'
    },
    argTypes: {
        children: { control: 'text' },
        color: {
            control: 'radio',
            options: ['blue', 'green', 'yellow', 'red', 'dark'],
            table: { defaultValue: { summary: 'blue' } }
        },
        compact: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        leftIcon: {
            control: 'select',
            options: [
                undefined,
                'IconPlus',
                'IconPencil',
                'IconChevronDown',
                'IconSettings',
                'IconTrash'
            ]
        },
        loading: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        radius: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'sm' } }
        },
        rightIcon: {
            control: 'select',
            options: [
                undefined,
                'IconPlus',
                'IconPencil',
                'IconChevronDown',
                'IconSettings',
                'IconTrash'
            ]
        },
        size: {
            control: 'radio',
            options: buttonSizes,
            table: { defaultValue: { summary: 'sm' } }
        },
        variant: {
            control: 'radio',
            options: buttonVariants,
            table: { defaultValue: { summary: 'filled' } }
        }
    },
    component: Button,
    title: 'UI/Buttons/Button'
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {};

export const Variants: StoryObj<typeof Button> = {
    argTypes: {
        color: { table: { disable: true } },
        variant: { table: { disable: true } }
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {buttonVariants.map((variant) => (
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
                    {buttonColors.map((color) => (
                        <Button
                            {...args}
                            color={color}
                            key={color}
                            variant={variant}
                        >
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </Button>
                    ))}
                </div>
            ))}
        </div>
    )
};

export const Sizes: StoryObj<typeof Button> = {
    argTypes: { size: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 24 }}>
            {buttonSizes.map((size) => (
                <div key={size} style={columnStyle}>
                    <Button {...args} size={size}>
                        Button
                    </Button>
                    <span style={labelStyle}>{size}</span>
                </div>
            ))}
        </div>
    )
};

export const WithIcons: StoryObj<typeof Button> = {
    argTypes: {
        leftIcon: { table: { disable: true } },
        rightIcon: { table: { disable: true } },
        size: { table: { disable: true } }
    },
    render: (args) => {
        const iconCombos = [
            {
                children: 'Add Item',
                label: 'leftIcon',
                leftIcon: 'IconPlus' as TablerIconKeys,
                rightIcon: undefined
            },
            {
                children: 'Dropdown',
                label: 'rightIcon',
                leftIcon: undefined,
                rightIcon: 'IconChevronDown' as TablerIconKeys
            },
            {
                children: 'Send',
                label: 'both',
                leftIcon: 'IconSend' as TablerIconKeys,
                rightIcon: 'IconChevronRight' as TablerIconKeys
            }
        ] as const;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {buttonSizes.map((size) => (
                    <div
                        key={size}
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
                            {size}
                        </span>
                        {iconCombos.map(
                            ({ children, label, leftIcon, rightIcon }) => (
                                <Button
                                    {...args}
                                    key={label}
                                    leftIcon={leftIcon}
                                    rightIcon={rightIcon}
                                    size={size}
                                >
                                    {children}
                                </Button>
                            )
                        )}
                    </div>
                ))}
            </div>
        );
    }
};
