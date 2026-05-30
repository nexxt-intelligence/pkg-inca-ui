import { Input } from '@mantine/core';
import * as React from 'react';

import Icon from '../Icon';
import Tooltip, { type TooltipProps } from '../Tooltip';
import classes from './Label.module.css';

export interface LabelProps {
    htmlFor?: string; // Add htmlFor when label is used standalone (not inside Mantine's label prop)
    id?: string; // Add id when label is used standalone and for multiple inputs or elements (use aria-labelledby referencing this id)
    label: React.ReactNode;
    required?: boolean;
    tooltip?: string;
    tooltipProps?: Omit<TooltipProps, 'children' | 'label'>;
}

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
            <Icon color="gray" size="xs" type="IconHelp" />
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
