import type { Meta, StoryObj } from '@storybook/react';
import Prism from './index';

export default {
    title: 'UI/Other Packages/Prism',
    component: Prism,
    argTypes: {
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
        },
        copyLabel: { control: 'text' },
        copiedLabel: { control: 'text' }
    }
} as Meta<typeof Prism>;

export const Primary: StoryObj<typeof Prism> = {
    args: {
        language: 'tsx',
        children: `function Hello() {\n  return <div>Hello World</div>;\n}`
    }
};
