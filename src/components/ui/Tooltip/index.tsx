import {
    Tooltip as MantineTooltip,
    TooltipProps as MantineTooltipProps
} from '@mantine/core';

import classes from './Tooltip.module.css';

export interface TooltipProps extends MantineTooltipProps {
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

export default Tooltip;
