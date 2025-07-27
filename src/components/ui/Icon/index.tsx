import * as React from 'react';
import { MantineNumberSize } from '@mantine/core';
import * as TablerIcons from '@tabler/icons-react';
import { theme } from '../../../constants/theme';

type IconProps = {
    type: string;
    size?: MantineNumberSize | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: string;
};

const Icon = ({ type, size = 'sm', color = 'inherit' }: IconProps) => {
    const iconSize = React.useMemo(() => {
        switch (size) {
            case '2xs':
                return '8px';
            case 'xs':
                return '12px';
            case 'sm':
                return '16px';
            case 'md':
                return '20px';
            case 'lg':
                return '24px';
            case 'xl':
                return '32px';
            default:
                return '16px';
        }
    }, [size]);

    const IconComponent = TablerIcons[type as keyof typeof TablerIcons];
    const props = {
        size: iconSize,
        color: theme.colors?.[color]?.[6] ?? undefined
    };

    if (!IconComponent) {
        console.warn(`Icon "${type}" not found in @tabler/icons-react`);
        return null;
    }

    return React.createElement(
        IconComponent as React.ComponentType<any>,
        props
    );
};

export default Icon;
