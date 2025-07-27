import Text from './index';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'UI/Text',
    component: Text,
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        weight: {
            control: 'select',
            options: [100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
        align: {
            control: 'select',
            options: ['left', 'center', 'right', 'justify']
        },
        transform: {
            control: 'select',
            options: ['none', 'capitalize', 'uppercase', 'lowercase']
        },
        color: {
            control: 'select',
            options: ['dark', 'gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'green', 'lime', 'yellow', 'orange']
        },
        italic: { control: 'boolean' },
        strikethrough: { control: 'boolean' },
        underline: { control: 'boolean' },
        truncate: { control: 'boolean' },
        span: { control: 'boolean' }
    }
} as Meta<typeof Text>;

export const Default: StoryObj<typeof Text> = {
    args: {
        children: 'This is default text'
    }
};

export const Sizes: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Text size="xs">Extra small text</Text>
            <Text size="sm">Small text</Text>
            <Text size="md">Medium text (default)</Text>
            <Text size="lg">Large text</Text>
            <Text size="xl">Extra large text</Text>
        </div>
    )
};

export const Weights: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Text fw={100}>Weight 100 - Thin</Text>
            <Text fw={300}>Weight 300 - Light</Text>
            <Text fw={400}>Weight 400 - Normal</Text>
            <Text fw={500}>Weight 500 - Medium</Text>
            <Text fw={600}>Weight 600 - Semi Bold</Text>
            <Text fw={700}>Weight 700 - Bold</Text>
            <Text fw={900}>Weight 900 - Black</Text>
        </div>
    )
};

export const Colors: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Text c="blue">Blue text</Text>
            <Text c="red">Red text</Text>
            <Text c="green">Green text</Text>
            <Text c="orange">Orange text</Text>
            <Text c="grape">Grape text</Text>
            <Text c="gray">Gray text</Text>
        </div>
    )
};

export const Transforms: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Text tt="none">No transform</Text>
            <Text tt="capitalize">capitalize text</Text>
            <Text tt="uppercase">uppercase text</Text>
            <Text tt="lowercase">LOWERCASE TEXT</Text>
        </div>
    )
};

export const Alignments: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
            <Text ta="left">Left aligned text</Text>
            <Text ta="center">Center aligned text</Text>
            <Text ta="right">Right aligned text</Text>
            <Text ta="justify">Justified text that is long enough to demonstrate the justify alignment across multiple lines of text content.</Text>
        </div>
    )
};

export const Decorations: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Text fs="italic">Italic text</Text>
            <Text td="underline">Underlined text</Text>
            <Text td="line-through">Strikethrough text</Text>
            <Text fs="italic" td="underline" fw={600}>Combined decorations</Text>
        </div>
    )
};

export const Truncated: StoryObj<typeof Text> = {
    render: () => (
        <div style={{ width: '200px' }}>
            <Text truncate>
                This is a very long text that will be truncated because it exceeds the container width
            </Text>
        </div>
    )
};

export const InlineSpan: StoryObj<typeof Text> = {
    render: () => (
        <div>
            This is regular text with <Text span c="blue" fw={600}>inline blue bold text</Text> inside.
        </div>
    )
};

export const Paragraph: StoryObj<typeof Text> = {
    args: {
        children: 'This is a longer paragraph of text that demonstrates how the Text component renders multiple lines of content. It uses the Source Sans 3 font family and maintains good readability across different text lengths.',
        size: 'md'
    }
};