import * as React from 'react';
import { MantineNumberSize } from '@mantine/core';
import * as TablerIcons from '@tabler/icons-react';

export type TablerIconKeys = Extract<keyof typeof TablerIcons, `Icon${string}`>;

type IconProps = {
    type: TablerIconKeys;
    size?: MantineNumberSize | '2xs';
    color?: string;
};

const Icon = ({ type, size = 'sm', color }: IconProps) => {
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
                return 16;
        }
    }, [size]);

    const IconComponent = TablerIcons[type];

    return (
        <IconComponent
            size={iconSize}
            stroke={1.5}
            color={color}
            style={{ color }}
        />
    );
};

export default Icon;
