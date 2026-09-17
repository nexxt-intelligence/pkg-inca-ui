import React from 'react';

import { CustomMantineProvider } from '../src';

// Storybook renders through the SAME provider the library exports, so what you
// see here is what a consuming app gets. Note this deliberately does NOT set
// withGlobalStyles / withNormalizeCSS — CustomMantineProvider doesn't either,
// and consuming apps bring their own global CSS.
export const decorators = [
    (renderStory: () => React.ReactNode) => (
        <CustomMantineProvider>{renderStory()}</CustomMantineProvider>
    )
];
