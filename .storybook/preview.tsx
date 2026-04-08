import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import React from 'react';

import '../src/assets/global.css';
// import theme object you've exported in previous step
import { theme } from '../src/constants/theme';

// Create a wrapper component that will contain all your providers.
// Usually you should render all providers in this component:
// MantineProvider, DatesProvider, Notifications, Spotlight, etc.
function ThemeWrapper(props: { children: React.ReactNode }) {
    return (
        <MantineProvider
            theme={theme}
            withCSSVariables
            withGlobalStyles
            withNormalizeCSS
        >
            <ModalsProvider>{props.children}</ModalsProvider>
        </MantineProvider>
    );
}

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [
    (renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>
];
