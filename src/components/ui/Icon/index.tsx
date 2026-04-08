import {
    MantineColor,
    MantineNumberSize,
    useMantineTheme
} from '@mantine/core';
import * as TablerIcons from '@tabler/icons-react';
import * as React from 'react';

export type TablerIconKeys = Extract<keyof typeof TablerIcons, `Icon${string}`>;

interface IconProps {
    /**
     * A Mantine theme color token (e.g. `"blue"`, `"red.6"`).
     */
    color?: MantineColor;
    size?: '2xs' | MantineNumberSize;
    /**
     * Name of the Tabler icon to render (e.g. `"IconHome"`, `"IconUser"`).
     * Full list: https://tabler.io/icons
     */
    type: TablerIconKeys;
}

const Icon = ({ color, size = 'sm', type }: IconProps) => {
    const theme = useMantineTheme();

    const resolvedColor = React.useMemo(() => {
        if (!color) return undefined;
        const [colorName, shade] = color.split('.');
        const themeColor = theme.colors[colorName];
        if (!themeColor) return color;
        const shadeIndex =
            shade !== undefined
                ? parseInt(shade, 10)
                : typeof theme.primaryShade === 'object'
                ? theme.primaryShade.light
                : theme.primaryShade;
        return themeColor[shadeIndex];
    }, [color, theme]);

    const iconSize = React.useMemo(() => {
        switch (size) {
            case '2xs':
                return 8;
            case 'lg':
                return 24;
            case 'md':
                return 20;
            case 'sm':
                return 16;
            case 'xl':
                return 32;
            case 'xs':
                return 12;
            default:
                return size || 16;
        }
    }, [size]);

    const IconComponent = TablerIcons[type];

    return (
        <IconComponent
            color={resolvedColor}
            size={iconSize}
            stroke={1.5}
            style={{ color: resolvedColor }}
        />
    );
};

export default Icon;
