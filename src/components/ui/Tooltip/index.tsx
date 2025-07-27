import {
    Tooltip as MantineTooltip,
    TooltipProps as MantineTooltipProps
} from '@mantine/core';
import classes from './Tooltip.module.css';

export interface TooltipProps extends MantineTooltipProps {
    label: string | React.ReactNode;
}

const Tooltip = ({ label, children, multiline, ...props }: TooltipProps) => {
    return (
        <MantineTooltip
            label={label}
            withArrow
            {...props}
            classNames={{ tooltip: classes.tooltip }}
            multiline
            width={multiline === true ? 400 : 'auto'}
        >
            <span style={{ display: 'inline-flex' }}>{children}</span>
        </MantineTooltip>
    );
};

export default Tooltip;
