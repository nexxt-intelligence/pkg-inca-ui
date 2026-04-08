import { Meta, StoryObj } from '@storybook/react';

import Text from './index';

export default {
    argTypes: {
        c: {
            control: 'select',
            options: ['dark', 'gray', 'red', 'blue', 'green', 'orange']
        },
        children: { control: 'text' },
        fs: {
            control: 'radio',
            options: ['normal', 'italic'],
            table: { defaultValue: { summary: 'normal' } }
        },
        fw: {
            control: 'select',
            options: [300, 400, 500, 600, 700],
            table: { defaultValue: { summary: '400' } }
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'md' } }
        },
        span: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        ta: {
            control: 'radio',
            options: ['left', 'center', 'right'],
            table: { defaultValue: { summary: 'left' } }
        },
        td: {
            control: 'radio',
            options: ['none', 'underline', 'line-through'],
            table: { defaultValue: { summary: 'none' } }
        },
        truncate: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        tt: {
            control: 'select',
            options: ['none', 'capitalize', 'uppercase', 'lowercase'],
            table: { defaultValue: { summary: 'none' } }
        }
    },
    component: Text,
    title: 'UI/Typography/Text'
} as Meta<typeof Text>;

export const Primary: StoryObj<typeof Text> = {
    args: {
        children: 'Text content'
    }
};

export const Sizes: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <div
                    key={size}
                    style={{ alignItems: 'baseline', display: 'flex', gap: 12 }}
                >
                    <Text size={size}>
                        The quick brown fox jumps over the lazy dog
                    </Text>
                    <span
                        style={{
                            color: '#868e96',
                            flexShrink: 0,
                            fontSize: 11
                        }}
                    >
                        {size}
                    </span>
                </div>
            ))}
        </div>
    )
};

export const Weights: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {([300, 400, 500, 600, 700] as const).map((fw) => (
                <div
                    key={fw}
                    style={{ alignItems: 'baseline', display: 'flex', gap: 12 }}
                >
                    <Text fw={fw}>
                        The quick brown fox jumps over the lazy dog
                    </Text>
                    <span
                        style={{
                            color: '#868e96',
                            flexShrink: 0,
                            fontSize: 11
                        }}
                    >
                        fw={fw}
                    </span>
                </div>
            ))}
        </div>
    )
};
