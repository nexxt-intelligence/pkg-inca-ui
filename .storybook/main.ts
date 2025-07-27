import { dirname, join } from 'path';
export default {
    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
        // '../src/**/*.mdx',
        // '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],

    addons: [
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-links')
    ],
    core: {
        builder: '@storybook/builder-vite'
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
    },

    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {}
    },

    docs: {
        autodocs: true
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};

function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}
