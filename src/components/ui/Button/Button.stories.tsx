import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import { TablerIconKeys } from '../Icon';

const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6
};

const labelStyle: React.CSSProperties = { fontSize: 11, color: '#868e96' };

export default {
    title: 'UI/Buttons/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        variant: {
            control: 'radio',
            options: ['filled', 'subtle', 'outline', 'default'],
            table: { defaultValue: { summary: 'filled' } }
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md'],
            table: { defaultValue: { summary: 'sm' } }
        },
        color: {
            control: 'radio',
            options: ['primary', 'green', 'yellow', 'red'],
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
        loading: {
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
        }
    },
    args: {
        children: 'Button',
        variant: 'filled',
        size: 'sm',
        color: 'primary',
        compact: false,
        disabled: false,
        loading: false
    }
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {};

export const Variants: StoryObj<typeof Button> = {
    argTypes: { variant: { table: { disable: true } } },
    render: (args) => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
            {(['filled', 'subtle', 'outline', 'default'] as const).map(
                (variant) => (
                    <div key={variant} style={columnStyle}>
                        <Button {...args} variant={variant}>
                            {variant.charAt(0).toUpperCase() + variant.slice(1)}
                        </Button>
                        <span style={labelStyle}>{variant}</span>
                    </div>
                )
            )}
        </div>
    )
};

export const Sizes: StoryObj<typeof Button> = {
    argTypes: { size: { table: { disable: true } } },
    render: (args) => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
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
                    style={{ display: 'flex', gap: 12, alignItems: 'center' }}
                >
                    <span
                        style={{ ...labelStyle, width: 48, textAlign: 'right' }}
                    >
                        {variant}
                    </span>
                    {(['primary', 'green', 'yellow', 'red'] as const).map(
                        (color) => (
                            <Button
                                {...args}
                                key={color}
                                variant={variant}
                                color={color}
                            >
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </Button>
                        )
                    )}
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
                label: 'leftIcon',
                leftIcon: 'IconPlus' as TablerIconKeys,
                rightIcon: undefined,
                children: 'Add Item'
            },
            {
                label: 'rightIcon',
                leftIcon: undefined,
                rightIcon: 'IconChevronDown' as TablerIconKeys,
                children: 'Dropdown'
            },
            {
                label: 'both',
                leftIcon: 'IconSend' as TablerIconKeys,
                rightIcon: 'IconChevronRight' as TablerIconKeys,
                children: 'Send'
            }
        ] as const;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {(['filled', 'subtle', 'outline', 'default'] as const).map(
                    (variant) => (
                        <div
                            key={variant}
                            style={{
                                display: 'flex',
                                gap: 12,
                                alignItems: 'center'
                            }}
                        >
                            <span
                                style={{
                                    ...labelStyle,
                                    width: 48,
                                    textAlign: 'right'
                                }}
                            >
                                {variant}
                            </span>
                            {iconCombos.map(
                                ({ label, leftIcon, rightIcon, children }) => (
                                    <Button
                                        {...args}
                                        key={label}
                                        variant={variant}
                                        leftIcon={leftIcon}
                                        rightIcon={rightIcon}
                                    >
                                        {children}
                                    </Button>
                                )
                            )}
                        </div>
                    )
                )}
            </div>
        );
    }
};
