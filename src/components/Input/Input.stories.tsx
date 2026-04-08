import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

export default {
    argTypes: {
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' },
        label: { control: 'text' },
        multilineTooltip: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        placeholder: { control: 'text' },
        tooltip: { control: 'text' },
        type: {
            control: 'radio',
            options: ['text', 'number', 'password'],
            table: { defaultValue: { summary: 'text' } }
        }
    },
    component: Input,
    title: 'Components/Input'
} as Meta<typeof Input>;

export const Primary: StoryObj<typeof Input> = {
    args: {
        label: 'Input label',
        placeholder: 'Enter text here'
    }
};

export const Types: StoryObj<typeof Input> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {(['text', 'number', 'password'] as const).map((type) => (
                <div
                    key={type}
                    style={{ alignItems: 'flex-end', display: 'flex', gap: 12 }}
                >
                    <Input
                        label={type.charAt(0).toUpperCase() + type.slice(1)}
                        placeholder={`Enter ${type}`}
                        style={{ flex: 1 }}
                        type={type}
                    />
                    <span
                        style={{
                            color: '#868e96',
                            fontSize: 11,
                            paddingBottom: 8,
                            width: 48
                        }}
                    >
                        {type}
                    </span>
                </div>
            ))}
        </div>
    )
};
