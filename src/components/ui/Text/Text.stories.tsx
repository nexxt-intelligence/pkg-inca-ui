import Text from './index';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'UI/Typography/Text',
    component: Text,
    argTypes: {
        children: { control: 'text' },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'md' } }
        },
        fw: {
            control: 'select',
            options: [300, 400, 500, 600, 700],
            table: { defaultValue: { summary: '400' } }
        },
        ta: {
            control: 'radio',
            options: ['left', 'center', 'right'],
            table: { defaultValue: { summary: 'left' } }
        },
        c: {
            control: 'select',
            options: ['dark', 'gray', 'red', 'blue', 'green', 'orange']
        },
        tt: {
            control: 'select',
            options: ['none', 'capitalize', 'uppercase', 'lowercase'],
            table: { defaultValue: { summary: 'none' } }
        },
        fs: {
            control: 'radio',
            options: ['normal', 'italic'],
            table: { defaultValue: { summary: 'normal' } }
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
        span: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    }
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
                    style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}
                >
                    <Text size={size}>
                        The quick brown fox jumps over the lazy dog
                    </Text>
                    <span
                        style={{
                            fontSize: 11,
                            color: '#868e96',
                            flexShrink: 0
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
                    style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}
                >
                    <Text fw={fw}>
                        The quick brown fox jumps over the lazy dog
                    </Text>
                    <span
                        style={{
                            fontSize: 11,
                            color: '#868e96',
                            flexShrink: 0
                        }}
                    >
                        fw={fw}
                    </span>
                </div>
            ))}
        </div>
    )
};
