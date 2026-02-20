import * as React from 'react';
import {
    MantineColor,
    MantineNumberSize,
    useMantineTheme
} from '@mantine/core';
import * as TablerIcons from '@tabler/icons-react';

export type TablerIconKeys = Extract<keyof typeof TablerIcons, `Icon${string}`>;

interface IconProps {
    /**
     * Name of the Tabler icon to render (e.g. `"IconHome"`, `"IconUser"`).
     * Full list: https://tabler.io/icons
     */
    type: TablerIconKeys;
    size?: MantineNumberSize | '2xs';
    /**
     * A Mantine theme color token (e.g. `"blue"`, `"red.6"`).
     */
    color?: MantineColor;
}

const Icon = ({ type, size = 'sm', color }: IconProps) => {
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
            case 'xs':
                return 12;
            case 'sm':
                return 16;
            case 'md':
                return 20;
            case 'lg':
                return 24;
            case 'xl':
                return 32;
            default:
                return size || 16;
        }
    }, [size]);

    const IconComponent = TablerIcons[type];

    return (
        <IconComponent
            size={iconSize}
            stroke={1.5}
            color={resolvedColor}
            style={{ color: resolvedColor }}
        />
    );
};

export default Icon;
