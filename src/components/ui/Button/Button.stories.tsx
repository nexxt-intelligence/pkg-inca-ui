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

const labelStyle: React.CSSProperties = { color: '#868e96', fontSize: 11 };

export default {
    args: {
        children: 'Button',
        color: 'primary',
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
            options: ['primary', 'green', 'yellow', 'red', 'dark'],
            table: { defaultValue: { summary: 'primary' } }
        },
        compact: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        disabled: {
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
            options: ['xs', 'sm', 'md'],
            table: { defaultValue: { summary: 'sm' } }
        },
        variant: {
            control: 'radio',
            options: ['filled', 'subtle', 'outline'],
            table: { defaultValue: { summary: 'filled' } }
        }
    },
    component: Button,
    title: 'UI/Buttons/Button'
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {};

export const Variants: StoryObj<typeof Button> = {
    argTypes: { variant: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 24 }}>
            {(['filled', 'subtle', 'outline'] as const).map((variant) => (
                <div key={variant} style={columnStyle}>
                    <Button {...args} variant={variant}>
                        {variant.charAt(0).toUpperCase() + variant.slice(1)}
                    </Button>
                    <span style={labelStyle}>{variant}</span>
                </div>
            ))}
        </div>
    )
};

export const Sizes: StoryObj<typeof Button> = {
    argTypes: { size: { table: { disable: true } } },
    render: (args) => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 24 }}>
            {(['xs', 'sm', 'md'] as const).map((size) => (
                <div key={size} style={columnStyle}>
                    <Button {...args} size={size}>
                        {args.children as string}
                    </Button>
                    <span style={labelStyle}>{size}</span>
                </div>
            ))}
        </div>
    )
};

export const Colors: StoryObj<typeof Button> = {
    argTypes: {
        color: { table: { disable: true } },
        variant: { table: { disable: true } }
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {(['filled', 'subtle', 'outline'] as const).map((variant) => (
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
                    {(
                        ['primary', 'green', 'yellow', 'red', 'dark'] as const
                    ).map((color) => (
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

export const WithIcons: StoryObj<typeof Button> = {
    argTypes: {
        leftIcon: { table: { disable: true } },
        rightIcon: { table: { disable: true } },
        variant: { table: { disable: true } }
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
                {(['filled', 'subtle', 'outline'] as const).map((variant) => (
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
                        {iconCombos.map(
                            ({ children, label, leftIcon, rightIcon }) => (
                                <Button
                                    {...args}
                                    key={label}
                                    leftIcon={leftIcon}
                                    rightIcon={rightIcon}
                                    variant={variant}
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
