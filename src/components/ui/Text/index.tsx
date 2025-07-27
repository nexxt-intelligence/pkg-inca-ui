import * as React from 'react';
import {
    Text as MantineText,
    TextProps as MantineTextProps
} from '@mantine/core';

export default function Text({ children, ...props }: MantineTextProps) {
    return (
        <MantineText ff="Source Sans 3, sans-serif" {...props}>
            {children}
        </MantineText>
    );
}
