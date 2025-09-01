import {
    Tooltip as MantineTooltip,
    TooltipProps as MantineTooltipProps
} from '@mantine/core';
import classes from './Tooltip.module.css';

export interface TooltipProps extends MantineTooltipProps {
    label: string;
}

const Tooltip = ({
    label,
    children,
    withArrow = true,
    multiline = true,
    position = 'top',
    ...props
}: TooltipProps) => {
    return (
        <MantineTooltip
            classNames={{ tooltip: classes.tooltip }}
            label={label}
            withArrow={withArrow}
            multiline={multiline}
            position={position}
            maw={320}
            {...props}
        >
            <span className={classes.tooltipChildren}> {children}</span>
        </MantineTooltip>
    );
};

export default Tooltip;
