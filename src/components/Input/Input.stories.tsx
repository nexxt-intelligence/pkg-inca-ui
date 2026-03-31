import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        tooltip: { control: 'text' },
        multilineTooltip: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        type: {
            control: 'radio',
            options: ['text', 'number', 'password'],
            table: { defaultValue: { summary: 'text' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        error: { control: 'text' }
    }
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
                    style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}
                >
                    <Input
                        label={type.charAt(0).toUpperCase() + type.slice(1)}
                        type={type}
                        placeholder={`Enter ${type}`}
                        style={{ flex: 1 }}
                    />
                    <span
                        style={{
                            fontSize: 11,
                            color: '#868e96',
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
