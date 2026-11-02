import {
    Tooltip as MantineTooltip,
    TooltipFloatingProps as MantineTooltipFloatingProps,
    TooltipProps as MantineTooltipProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';
import classes from './Tooltip.module.css';

export interface FloatingTooltipProps
    extends StrictProps<MantineTooltipFloatingProps> {
    /** Tooltip content. */
    label: React.ReactElement | string;
}

export interface TooltipProps extends StrictProps<MantineTooltipProps> {
    /** Tooltip content. */
    label: React.ReactElement | string;
}

/**
 * Mantine [Tooltip](https://v6.mantine.dev/core/tooltip/) with inca-ui defaults: arrow, multiline, 320px max width. Use `Tooltip.Floating` for one that follows the cursor.
 */
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
            <span className={classes.target}>{children}</span>
        </MantineTooltip>
    );
};

/**
 * Tooltip that follows the cursor.
 */
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
