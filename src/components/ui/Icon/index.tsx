import {
    MantineColor,
    MantineNumberSize,
    useMantineTheme
} from '@mantine/core';
import * as TablerIcons from '@tabler/icons-react';
import * as React from 'react';

export type TablerIconKeys = Extract<keyof typeof TablerIcons, `Icon${string}`>;

interface IconProps {
    /** A color token (`"var(--icon-accent)"`), a theme color (`"red.6"`) or any CSS color. */
    color?: MantineColor;
    /** Rotates the icon, in degrees. */
    iconRotate?: number;
    /** `2xs` 8px · `xs` 12px · `sm` 16px · `md` 20px · `lg` 24px · `xl` 32px · or any number in px. */
    size?: '2xs' | MantineNumberSize;
    /** Tabler icon name to render, e.g. `"IconHome"` or `"IconUser"`. */
    type: TablerIconKeys;
}

/**
 * **Custom inca-ui component** for [Tabler Icons](https://tabler.io/icons) (`@tabler/icons-react`
 * 2.47), not Mantine. Renders an icon by name, using inca-ui sizes and token colors.
 *
 * **Finding a name:** search the **All icons** story below. It lists every icon in the version we
 * use, and clicking one copies its name. tabler.io shows the newest Tabler, which has icons we don't.
 *
 * **Name format:** `Icon` + the Tabler name in PascalCase, e.g. `arrow-left` → `IconArrowLeft`,
 * `user-circle` → `IconUserCircle`. Filled versions end in `Filled` (`IconHeartFilled`).
 */
const Icon = ({ color, iconRotate = 0, size = 'sm', type }: IconProps) => {
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
            style={{
                color: resolvedColor,
                transform: `rotate(${iconRotate}deg)`
            }}
        />
    );
};

export default Icon;
