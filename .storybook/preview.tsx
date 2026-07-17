import type { Preview } from '@storybook/react';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import React from 'react';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/tiptap/styles.css';

import '../src/assets/global.css';
import '../src/tokens.css';
// import theme object you've exported in previous step
import { theme } from '../src/constants/theme';

// Create a wrapper component that will contain all your providers.
// Usually you should render all providers in this component:
// MantineProvider, DatesProvider, Notifications, Spotlight, etc.
function ThemeWrapper(props: { children: React.ReactNode }) {
    return (
        <MantineProvider theme={theme} withCssVariables>
            <ModalsProvider>{props.children}</ModalsProvider>
        </MantineProvider>
    );
}

// enhance your stories with decorator that uses ThemeWrapper
export const decorators: Preview['decorators'] = [
    (renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>
];
