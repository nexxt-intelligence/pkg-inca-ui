import type { Meta, StoryObj } from '@storybook/react';

import { SegmentedControl } from '../../..';

const meta = {
    args: {
        data: [
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Angular', value: 'angular' }
        ]
    },
    argTypes: {
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            table: { defaultValue: { summary: 'horizontal' } }
        }
    },
    component: SegmentedControl,
    title: 'UI/Inputs/SegmentedControl'
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
