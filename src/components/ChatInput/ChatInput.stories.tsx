import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ChatInput from './index';

export default {
    title: 'Components/ChatInput',
    component: ChatInput,
    argTypes: {
        placeholder: { control: 'text' },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    }
} as Meta<typeof ChatInput>;

export const Primary: StoryObj<typeof ChatInput> = {
    args: {
        placeholder: 'Type a message...',
        handleSend: () => {}
    }
};

export const Disabled: StoryObj<typeof ChatInput> = {
    args: {
        placeholder: 'Type a message...',
        disabled: true,
        handleSend: () => {}
    }
};

const InteractiveDemo = () => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleSend = () => {
        if (!value.trim()) return;
        setMessages((prev) => [...prev, value]);
        setValue('');
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                width: 400
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        style={{
                            background: '#f1f3f5',
                            borderRadius: 8,
                            padding: '8px 12px',
                            fontSize: 14
                        }}
                    >
                        {msg}
                    </div>
                ))}
            </div>
            <ChatInput
                placeholder="Type a message..."
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                handleSend={handleSend}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                    }
                }}
            />
        </div>
    );
};

export const Interactive: StoryObj<typeof ChatInput> = {
    render: () => <InteractiveDemo />,
    parameters: { controls: { disable: true } }
};
