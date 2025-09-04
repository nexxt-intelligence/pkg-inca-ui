import type { Meta, StoryObj } from '@storybook/react';
import SegmentedControl from './index';

const meta: Meta<typeof SegmentedControl> = {
    title: 'UI/SegmentedControl',
    component: SegmentedControl,
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
    args: {
        data: [
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' }
        ]
    }
};
