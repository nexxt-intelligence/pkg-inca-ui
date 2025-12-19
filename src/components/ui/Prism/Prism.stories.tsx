import type { Meta, StoryObj } from '@storybook/react';
import Prism from './index';

const meta: Meta<typeof Prism> = {
    title: 'UI/Prism',
    component: Prism,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Prism>;

const reactCode = `import React from 'react';

function Demo() {
  return <div>Hello World</div>;
}`;

const pythonCode = `def hello_world():
    print("Hello, World!")
    return True`;

const jsonCode = `{
  "name": "example",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0"
  }
}`;

export const JavaScript: Story = {
    args: {
        language: 'tsx',
        children: reactCode
    }
};

export const Python: Story = {
    args: {
        language: 'python',
        children: pythonCode
    }
};

export const JSON: Story = {
    args: {
        language: 'json',
        children: jsonCode
    }
};

export const WithLineNumbers: Story = {
    args: {
        language: 'tsx',
        children: reactCode,
        withLineNumbers: true
    }
};

export const WithCopyButton: Story = {
    args: {
        language: 'tsx',
        children: reactCode,
        copyLabel: 'Copy code',
        copiedLabel: 'Copied!'
    }
};
