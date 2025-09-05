import { Input } from '@mantine/core';
import Tooltip from '../Tooltip';
import Icon from '../Icon';
import classes from './Label.module.css';

export interface LabelProps {
    label: string;
    required?: boolean;
    tooltip?: string;
    htmlFor?: string; // Add htmlFor when label is used standalone (not inside Mantine's label prop)
}

const Label = ({ label, tooltip, required, htmlFor }: LabelProps) => {
    const LabelContent = htmlFor ? (
        <Input.Label required={required} htmlFor={htmlFor}>
            {label}
        </Input.Label>
    ) : (
        <span className={classes.label}>{label}</span>
    );

    return (
        <>
            {LabelContent}
            {tooltip && (
                <Tooltip label={tooltip}>
                    <Icon type="IconHelp" size="xs" color="gray" />
                </Tooltip>
            )}
        </>
    );
};

export default Label;
