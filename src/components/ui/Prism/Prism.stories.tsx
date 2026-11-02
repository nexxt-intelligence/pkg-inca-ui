import type { Meta, StoryObj } from '@storybook/react';

import { Prism } from '../../..';

const meta = {
    args: {
        children: `function Hello() {\n  return <div>Hello World</div>;\n}`,
        language: 'tsx'
    },
    argTypes: {
        copiedLabel: { control: 'text' },
        copyLabel: { control: 'text' },
        language: {
            control: 'select',
            options: [
                'tsx',
                'typescript',
                'javascript',
                'json',
                'python',
                'bash'
            ],
            table: { defaultValue: { summary: 'tsx' } }
        },
        withLineNumbers: {
            control: 'boolean',
            table: { defaultValue: { summary: 'false' } }
        }
    },
    component: Prism,
    title: 'UI/Other Packages/Prism'
} satisfies Meta<typeof Prism>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
