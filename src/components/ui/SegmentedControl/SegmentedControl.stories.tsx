import type { Meta, StoryObj } from '@storybook/react';

import SegmentedControl from './index';

export default {
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
} as Meta<typeof SegmentedControl>;

export const Primary: StoryObj<typeof SegmentedControl> = {
    args: {
        data: [
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Angular', value: 'angular' }
        ]
    }
};
