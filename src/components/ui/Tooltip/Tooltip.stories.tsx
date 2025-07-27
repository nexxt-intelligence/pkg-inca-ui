import Tooltip from './index';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import Icon from '../Icon';

export default {
    title: 'UI/Tooltip',
    component: Tooltip,
    argTypes: {
        label: { control: 'text' },
        position: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right']
        },
        withArrow: { control: 'boolean' },
        multiline: { control: 'boolean' },
        opened: { control: 'boolean' },
        disabled: { control: 'boolean' }
    }
} as Meta<typeof Tooltip>;

export const Default: StoryObj<typeof Tooltip> = {
    args: {
        label: 'This is a tooltip'
    },
    render: (args) => (
        <Tooltip {...args}>
            <Button>Hover me</Button>
        </Tooltip>
    )
};

export const WithIcon: StoryObj<typeof Tooltip> = {
    args: {
        label: 'This tooltip explains the icon'
    },
    render: (args) => (
        <Tooltip {...args}>
            <Icon type="IconHelp" size="md" />
        </Tooltip>
    )
};

export const Multiline: StoryObj<typeof Tooltip> = {
    args: {
        label: 'This is a very long tooltip text that will wrap across multiple lines to demonstrate the multiline functionality of the tooltip component.',
        multiline: true
    },
    render: (args) => (
        <Tooltip {...args}>
            <Button>Hover for long tooltip</Button>
        </Tooltip>
    )
};

export const Positions: StoryObj<typeof Tooltip> = {
    render: () => (
        <div style={{ display: 'flex', gap: '20px', padding: '50px', justifyContent: 'center' }}>
            <Tooltip label="Top tooltip" position="top">
                <Button>Top</Button>
            </Tooltip>
            <Tooltip label="Bottom tooltip" position="bottom">
                <Button>Bottom</Button>
            </Tooltip>
            <Tooltip label="Left tooltip" position="left">
                <Button>Left</Button>
            </Tooltip>
            <Tooltip label="Right tooltip" position="right">
                <Button>Right</Button>
            </Tooltip>
        </div>
    )
};

export const AlwaysOpen: StoryObj<typeof Tooltip> = {
    args: {
        label: 'This tooltip is always visible',
        opened: true
    },
    render: (args) => (
        <div style={{ padding: '50px' }}>
            <Tooltip {...args}>
                <Button>Always visible tooltip</Button>
            </Tooltip>
        </div>
    )
};

export const Disabled: StoryObj<typeof Tooltip> = {
    args: {
        label: 'This tooltip is disabled',
        disabled: true
    },
    render: (args) => (
        <Tooltip {...args}>
            <Button>Disabled tooltip (won't show)</Button>
        </Tooltip>
    )
};

export const ReactNodeLabel: StoryObj<typeof Tooltip> = {
    args: {
        label: (
            <div>
                <strong>Rich content tooltip</strong>
                <br />
                <em>With multiple elements</em>
            </div>
        )
    },
    render: (args) => (
        <Tooltip {...args}>
            <Button>Rich content tooltip</Button>
        </Tooltip>
    )
};