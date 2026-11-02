import type { Preview } from '@storybook/react';

import { DocsContainer, type DocsContainerProps } from '@storybook/blocks';
import { type PropsWithChildren } from 'react';

import { CustomMantineProvider } from '../src';

type ArgTypesEnhancer = NonNullable<Preview['argTypesEnhancers']>[number];

// Stories and docs pages render through CustomMantineProvider, the same provider apps
// use, so what you see is what an app gets. It already pulls in
// global.css and tokens.css.
export const decorators: Preview['decorators'] = [
    (renderStory) => (
        <CustomMantineProvider>{renderStory()}</CustomMantineProvider>
    )
];

const DocsWithProvider = ({
    children,
    context
}: PropsWithChildren<DocsContainerProps>) => (
    <DocsContainer context={context}>
        <CustomMantineProvider>{children}</CustomMantineProvider>
    </DocsContainer>
);

// Props typed as TablerIconKeys would list all ~5,000 icon names as their type and in a
// dropdown. Show the type name and a text box instead, and link to the Icon page's search.
const ALL_ICONS_LINK =
    '<a href="./?path=/story/ui-data-display-icon--all-icons" target="_top">See all icons →</a>';

const shortenIconNameProps: ArgTypesEnhancer = ({ argTypes }) =>
    Object.fromEntries(
        Object.entries(argTypes).map(([name, argType]) => {
            const isIconName =
                typeof argType.type === 'object' &&
                argType.type.raw === 'TablerIconKeys';
            const acceptsIconName =
                isIconName ||
                argType.table?.type?.summary?.includes('TablerIconKeys');
            if (!acceptsIconName) return [name, argType];

            const iconNameType = {
                table: {
                    ...argType.table,
                    type: { summary: 'TablerIconKeys' }
                },
                // Keep a story's own short list of options; replace the inferred full list.
                ...((argType.options?.length ?? 0) > 100 && {
                    control: { type: 'text' as const },
                    options: undefined
                })
            };

            return [
                name,
                {
                    ...argType,
                    ...(isIconName && iconNameType),
                    description: `${
                        argType.description ?? ''
                    } ${ALL_ICONS_LINK}`
                }
            ];
        })
    );
shortenIconNameProps.secondPass = true;

export const argTypesEnhancers: Preview['argTypesEnhancers'] = [
    shortenIconNameProps
];

export const parameters: Preview['parameters'] = {
    docs: { container: DocsWithProvider },
    options: {
        storySort: {
            order: [
                'Docs',
                ['Getting Started', 'Tokens', 'Typography', 'Cheat Sheet'],
                '*'
            ]
        }
    }
};
