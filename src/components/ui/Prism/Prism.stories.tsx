import type { Meta, StoryObj } from '@storybook/react';

import Prism from './index';

export default {
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
} as Meta<typeof Prism>;

export const Primary: StoryObj<typeof Prism> = {
    args: {
        children: `function Hello() {\n  return <div>Hello World</div>;\n}`,
        language: 'tsx'
    }
};
