import { dirname, join } from 'path';

export default {
    addons: [
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-links')
    ],
    docs: {
        autodocs: true
    },
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {}
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            // Storybook skips *.stories.tsx by default. The Layout pages and the
            // useConfirmationModal demo define their documented component in the
            // story file, so stories are included to give them a description and props table.
            exclude: ['**/node_modules/**'],
            propFilter,
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true
        }
    }
};

// Props tables list our props plus the Mantine component's own props (with
// Mantine's descriptions). HTML attributes, Mantine style props (m, p, w, …)
// and Styles API / internal props are hidden so the tables stay readable.
const HIDDEN_PROPS = new Set([
    'attributes',
    'className',
    'classNames',
    'component',
    'darkHidden',
    'hiddenFrom',
    'lightHidden',
    'mod',
    'ref',
    'renderRoot',
    'style',
    'styles',
    'sx',
    'unstyled',
    'vars',
    'visibleFrom'
]);

function getAbsolutePath(value: string): string {
    return dirname(require.resolve(join(value, 'package.json')));
}

function propFilter(prop: {
    name: string;
    parent?: { fileName: string; name: string };
}): boolean {
    if (HIDDEN_PROPS.has(prop.name) || /^(__|data-)/.test(prop.name)) {
        return false;
    }
    const fileName = prop.parent?.fileName ?? '';
    if (!fileName.includes('node_modules')) return true;
    return (
        /node_modules\/@mantine\/(core|dropzone|modals|prism|tiptap)\//.test(
            fileName
        ) &&
        !/^(MantineStyleProps|MantineStyleSystemProps)$/.test(
            prop.parent?.name ?? ''
        )
    );
}
