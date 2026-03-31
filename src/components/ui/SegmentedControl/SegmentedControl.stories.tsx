import type { Meta, StoryObj } from '@storybook/react';
import SegmentedControl from './index';

export default {
    title: 'UI/Inputs/SegmentedControl',
    component: SegmentedControl,
    argTypes: {
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            table: { defaultValue: { summary: 'horizontal' } }
        },
        disabled: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        },
        fullWidth: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    }
} as Meta<typeof SegmentedControl>;

export const Primary: StoryObj<typeof SegmentedControl> = {
    args: {
        data: [
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' }
        ]
    }
};
