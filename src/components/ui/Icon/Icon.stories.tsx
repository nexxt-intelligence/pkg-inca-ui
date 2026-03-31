import { Meta, StoryObj } from '@storybook/react';
import Icon, { TablerIconKeys } from './index';

export default {
    title: 'UI/Data Display/Icon',
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
                'IconSettings',
                'IconTrash',
                'IconCheck',
                'IconX'
            ]
        },
        size: {
            control: 'radio',
            options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'sm' } }
        },
        color: {
            control: 'select',
            options: ['blue', 'red', 'green', 'gray', 'yellow', 'orange']
        }
    }
} as Meta<typeof Icon>;

export const Primary: StoryObj<typeof Icon> = {
    args: {
        type: 'IconHeart' as TablerIconKeys,
        size: 'md',
        color: 'red'
    }
};

export const AllSizes: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
            {(['2xs', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <div
                    key={size}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 6
                    }}
                >
                    <Icon type="IconHeart" size={size} color="red" />
                    <span style={{ fontSize: 11, color: '#868e96' }}>
                        {size}
                    </span>
                </div>
            ))}
        </div>
    )
};
