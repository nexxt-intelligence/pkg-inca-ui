import {
    ColorInput as MantineColorInput,
    ColorInputProps as MantineColorInputProps
} from '@mantine/core';
import Tooltip from '../Tooltip';
import classes from './ColorInput.module.css';
import Icon from '../Icon';

export interface ColorInputProps extends MantineColorInputProps {
    tooltip?: string;
    multilineTooltip?: boolean;
    leftFilledSection?: React.ReactNode;
    rightFilledSection?: React.ReactNode;
}

const ColorInput = ({
    label,
    tooltip,
    multilineTooltip,
    ...props
}: ColorInputProps) => {
    return (
        <MantineColorInput
            label={
                tooltip ? (
                    <span className={classes.tooltipIcon}>
                        {label}
                        <Tooltip label={tooltip} multiline={multilineTooltip}>
                            <Icon type="IconHelpCircleFilled" size="md" />
                        </Tooltip>
                    </span>
                ) : (
                    label
                )
            }
            labelProps={{
                fw: 400
            }}
            classNames={{
                label: classes.inputLabel,
                input: classes.input,
                wrapper: classes.inputWrapper,
                description: classes.description,
                error: classes.error
            }}
            {...props}
        />
    );
};

export default ColorInput;
