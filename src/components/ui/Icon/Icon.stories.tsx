import { Meta, StoryObj } from '@storybook/react';

import Icon, { TablerIconKeys } from './index';

export default {
    argTypes: {
        color: {
            control: 'select',
            options: ['blue', 'red', 'green', 'gray', 'yellow', 'orange']
        },
        size: {
            control: 'radio',
            options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'],
            table: { defaultValue: { summary: 'sm' } }
        },
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
        }
    },
    component: Icon,
    title: 'UI/Data Display/Icon'
} as Meta<typeof Icon>;

export const Primary: StoryObj<typeof Icon> = {
    args: {
        color: 'red',
        size: 'md',
        type: 'IconHeart' as TablerIconKeys
    }
};

export const AllSizes: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ alignItems: 'flex-end', display: 'flex', gap: 24 }}>
            {(['2xs', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <div
                    key={size}
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6
                    }}
                >
                    <Icon color="red" size={size} type="IconHeart" />
                    <span style={{ color: '#868e96', fontSize: 11 }}>
                        {size}
                    </span>
                </div>
            ))}
        </div>
    )
};
