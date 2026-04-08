import { dirname, join } from 'path';
export default {
    addons: [
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-links')
    ],

    core: {
        builder: '@storybook/builder-vite'
    },
    docs: {
        autodocs: true
    },
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {}
    },

    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
        // '../src/**/*.mdx',
        // '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    },

    async viteFinal(config) {
        // Merge custom configuration into the default config
        const { mergeConfig } = await import('vite');

        return mergeConfig(config, {
            // Add dependencies to pre-optimization
            optimizeDeps: {
                include: ['storybook-dark-mode']
            }
        });
    }
};

function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}
