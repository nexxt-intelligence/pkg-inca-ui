import { Input } from '@mantine/core';
import Tooltip from '../Tooltip';
import Icon from '../Icon';
import classes from './Label.module.css';

export interface LabelProps {
    label: string;
    required?: boolean;
    tooltip?: string;
    htmlFor?: string; // Add htmlFor when label is used standalone (not inside Mantine's label prop)
    id?: string; // Add id when label is used standalone and for multiple inputs or elements (use aria-labelledby referencing this id)
}

const Label = ({ label, tooltip, required, htmlFor, id }: LabelProps) => {
    const tooltipIcon = tooltip && (
        <Tooltip label={tooltip}>
            <Icon type="IconHelp" size="xs" color="gray" />
        </Tooltip>
    );

    return htmlFor || id ? (
        <span className={classes.label}>
            <Input.Label htmlFor={htmlFor} required={required} pr="2xs">
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
