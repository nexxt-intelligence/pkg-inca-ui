import {
    Tooltip as MantineTooltip,
    TooltipFloatingProps as MantineTooltipFloatingProps,
    TooltipProps as MantineTooltipProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';
import classes from './Tooltip.module.css';

export interface FloatingTooltipProps
    extends StrictProps<MantineTooltipFloatingProps> {
    label: React.ReactElement | string;
}

export interface TooltipProps extends StrictProps<MantineTooltipProps> {
    label: React.ReactElement | string;
}

const Tooltip = ({
    children,
    label,
    multiline = true,
    position = 'top',
    withArrow = true,
    ...props
}: TooltipProps) => {
    return (
        <MantineTooltip
            classNames={{ tooltip: classes.tooltip }}
            label={label}
            maw={320}
            multiline={multiline}
            position={position}
            withArrow={withArrow}
            {...props}
        >
            <span className={classes.tooltipChildren}>{children}</span>
        </MantineTooltip>
    );
};

const FloatingTooltip = ({
    children,
    label,
    multiline = true,
    position = 'top',
    ...props
}: FloatingTooltipProps) => (
    <MantineTooltip.Floating
        classNames={{ tooltip: classes.tooltip }}
        label={label}
        maw={320}
        multiline={multiline}
        position={position}
        {...props}
    >
        <span>{children}</span>
    </MantineTooltip.Floating>
);

Tooltip.Floating = FloatingTooltip;

export default Tooltip;
