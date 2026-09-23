import type { Preview } from '@storybook/react';

import React from 'react';

import { CustomMantineProvider } from '../src';

// Storybook renders through the SAME provider the library exports, so what you
// see here is what a consuming app gets. CustomMantineProvider already pulls in
// Mantine's styles, global.css and tokens.css, so nothing is imported here.
export const decorators: Preview['decorators'] = [
    (renderStory) => (
        <CustomMantineProvider>{renderStory()}</CustomMantineProvider>
    )
];
