import type { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta: Meta<typeof Badge> = {
    title: 'UI/Badge',
    component: Badge,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
        variant: {
            control: 'select',
            options: ['filled', 'light', 'outline', 'dot', 'gradient', 'white']
        },
        size: {
            control: 'select',
            options: ['sm', 'md']
        },
        color: {
            control: 'select',
            options: [
                'blue',
                'gray',
                'green',
                'orange',
                'dark',
                'red',
                'yellow',
                'indigo',
                'pink',
                'violet',
                'cyan',
                'teal',
                'lime'
            ]
        },
        radius: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        fullWidth: { control: 'boolean' }
    }
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Default story
export const Default: Story = {
    args: {
        children: 'Badge',
        color: 'blue',
        size: 'md',
        variant: 'filled'
    }
};

// Size variations
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Badge size="sm" color="blue">
                Small
            </Badge>
            <Badge size="md" color="blue">
                Medium
            </Badge>
        </div>
    )
};

// Variant variations
export const Variants: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Badge variant="filled" color="blue">
                Filled
            </Badge>
            <Badge variant="light" color="blue">
                Light
            </Badge>
            <Badge variant="outline" color="blue">
                Outline
            </Badge>
            <Badge variant="dot" color="blue">
                Dot
            </Badge>
            <Badge variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                Gradient
            </Badge>
            <Badge variant="white" color="blue">
                White
            </Badge>
        </div>
    )
};

// Color variations
export const Colors: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Badge color="blue">Blue</Badge>
            <Badge color="gray">Gray</Badge>
            <Badge color="green">Green</Badge>
            <Badge color="orange">Orange</Badge>
            <Badge color="red">Red</Badge>
            <Badge color="yellow">Yellow</Badge>
            <Badge color="indigo">Indigo</Badge>
            <Badge color="pink">Pink</Badge>
            <Badge color="violet">Violet</Badge>
            <Badge color="cyan">Cyan</Badge>
            <Badge color="teal">Teal</Badge>
            <Badge color="lime">Lime</Badge>
        </div>
    )
};

// Status badges (common use case)
export const StatusBadges: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Badge color="green" variant="light">
                Active
            </Badge>
            <Badge color="orange" variant="light">
                Pending
            </Badge>
            <Badge color="red" variant="light">
                Inactive
            </Badge>
            <Badge color="blue" variant="light">
                Draft
            </Badge>
            <Badge color="gray" variant="light">
                Archived
            </Badge>
            <Badge color="yellow" variant="light">
                Warning
            </Badge>
        </div>
    )
};

// Project status badges (based on existing patterns)
export const ProjectStatus: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Badge color="orange" variant="light">
                Draft
            </Badge>
            <Badge color="indigo" variant="light">
                Review
            </Badge>
            <Badge color="blue" variant="light">
                Ready
            </Badge>
            <Badge color="red" variant="light">
                Development
            </Badge>
            <Badge color="green" variant="light">
                Live
            </Badge>
            <Badge color="gray" variant="light">
                Complete
            </Badge>
            <Badge color="orange" variant="light">
                Paused
            </Badge>
        </div>
    )
};

// Notification badges
export const NotificationBadges: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Badge color="red" variant="filled">
                3
            </Badge>
            <Badge color="blue" variant="filled">
                12
            </Badge>
            <Badge color="green" variant="filled">
                New
            </Badge>
            <Badge color="orange" variant="filled">
                !
            </Badge>
        </div>
    )
};

// Radius variations
export const RadiusVariations: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Badge radius="xs" color="blue">
                Extra Small
            </Badge>
            <Badge radius="sm" color="blue">
                Small
            </Badge>
            <Badge radius="md" color="blue">
                Medium
            </Badge>
            <Badge radius="lg" color="blue">
                Large
            </Badge>
            <Badge radius="xl" color="blue">
                Extra Large
            </Badge>
        </div>
    )
};

// Full width badge
export const FullWidth: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <Badge fullWidth color="blue" variant="light">
                Full Width Badge
            </Badge>
        </div>
    )
};

// With icons (if supported by Mantine Badge)
export const WithIcons: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Badge color="green" variant="light" leftSection="✓">
                Success
            </Badge>
            <Badge color="red" variant="light" leftSection="✗">
                Error
            </Badge>
            <Badge color="blue" variant="light" leftSection="ℹ">
                Info
            </Badge>
            <Badge color="orange" variant="light" leftSection="⚠">
                Warning
            </Badge>
        </div>
    )
};

// Interactive badges (using div wrapper for click handling)
export const Interactive: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <div
                style={{ cursor: 'pointer' }}
                onClick={() => alert('Badge clicked!')}
            >
                <Badge color="blue" variant="light">
                    Clickable Badge
                </Badge>
            </div>
            <div
                style={{ cursor: 'pointer' }}
                onClick={() => alert('Badge clicked!')}
            >
                <Badge color="green" variant="outline">
                    Clickable Outline
                </Badge>
            </div>
        </div>
    )
};

// Complex content
export const ComplexContent: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Badge color="blue" variant="light">
                <span style={{ fontWeight: 'bold' }}>Bold</span> Text
            </Badge>
            <Badge color="green" variant="light">
                Multiple{' '}
                <span style={{ color: 'var(--mantine-color-green-8)' }}>
                    Words
                </span>
            </Badge>
            <Badge color="purple" variant="light">
                Long content that might wrap
            </Badge>
        </div>
    )
};

// Gradient badges
export const GradientBadges: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Badge variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                Blue to Cyan
            </Badge>
            <Badge variant="gradient" gradient={{ from: 'pink', to: 'violet' }}>
                Pink to Violet
            </Badge>
            <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
                Orange to Red
            </Badge>
            <Badge variant="gradient" gradient={{ from: 'green', to: 'teal' }}>
                Green to Teal
            </Badge>
        </div>
    )
};
