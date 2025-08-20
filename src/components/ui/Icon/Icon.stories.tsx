import { Meta, StoryObj } from '@storybook/react';
import Icon, { TablerIconKeys } from './index';

const meta: Meta<typeof Icon> = {
    title: 'UI/Icon',
    component: Icon,
    argTypes: {
        type: {
            control: 'select',
            options: [
                'IconHeart',
                'IconStar',
                'IconUser',
                'IconPlus',
                'IconPencil',
                'IconDotsVertical',
                'IconSettings',
                'IconTrash'
            ]
        },
        size: {
            control: 'select',
            options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl']
        },
        color: {
            control: 'select',
            options: ['blue', 'red', 'green', 'gray', 'yellow']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Icon>;

const baseArgs = {
    type: 'IconHeart' as TablerIconKeys,
    size: 'md',
    color: 'red'
};

export const Default: Story = { args: baseArgs };

export const Sizes: Story = {
    args: baseArgs,
    argTypes: { size: { control: false } },
    render: (args) => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Icon {...args} size="xs" />
            <Icon {...args} size="sm" />
            <Icon {...args} size="md" />
            <Icon {...args} size="lg" />
            <Icon {...args} size="xl" />
        </div>
    )
};
export const Colors: Story = {
    args: baseArgs,
    argTypes: { size: { control: false } },
    render: (args) => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Icon {...args} color="red" />
            <Icon {...args} color="green" />
            <Icon {...args} color="blue" />
            <Icon {...args} color="yellow" />
            <Icon {...args} color="orange" />
        </div>
    )
};
