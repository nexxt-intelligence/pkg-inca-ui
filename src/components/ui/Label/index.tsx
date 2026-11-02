import { Input } from '@mantine/core';
import * as React from 'react';

import Icon from '../Icon';
import Tooltip, { type TooltipProps } from '../Tooltip';
import classes from './Label.module.css';

export interface LabelProps {
    /** Id of the input this label belongs to. Only needed when the label is used on its own. */
    htmlFor?: string;
    /** Id of the label text, for `aria-labelledby`. Only needed when the label is used on its own. */
    id?: string;
    /** Label text. */
    label: React.ReactNode;
    /** Adds a red asterisk. */
    required?: boolean;
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
    /** Props passed to the tooltip (e.g. `position`, `multiline`). */
    tooltipProps?: Omit<TooltipProps, 'children' | 'label'>;
}

/**
 * **Custom inca-ui component** (not part of Mantine).
 *
 * Input label with an optional help tooltip. All inca-ui inputs already use it; use it directly only for custom fields.
 */
const Label = ({
    htmlFor,
    id,
    label,
    required,
    tooltip,
    tooltipProps
}: LabelProps) => {
    const tooltipIcon = tooltip && (
        <Tooltip label={tooltip} {...tooltipProps}>
            <Icon color="var(--icon-subtle)" size="xs" type="IconHelp" />
        </Tooltip>
    );

    return htmlFor || id ? (
        <span className={classes.label}>
            <Input.Label htmlFor={htmlFor} pr="2xs" required={required}>
                {id ? <span id={id}>{label}</span> : label}
            </Input.Label>
            {tooltipIcon}
        </span>
    ) : (
        <>
            <span className={classes.label}>{label}</span>
            {tooltipIcon}
        </>
    );
};

export default Label;
