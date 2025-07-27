import {
    Group,
    Switch as MantineSwitch,
    SwitchProps as MantineSwitchProps
} from '@mantine/core';
import Tooltip from '../Tooltip';
import Text from '../Text';
import classes from './Switch.module.css';
import Icon from '../Icon';
import cx from 'classnames';
export interface SwitchProps extends MantineSwitchProps {
    checked: boolean;
    fullWidth?: boolean;
    label?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    showTooltip?: boolean;
    tooltipText?: string;
}
const Switch = ({
    checked,
    fullWidth = false,
    label,
    labelPosition = 'left',
    onChange,
    showTooltip = false,
    tooltipText,
    ...props
}: SwitchProps) => {
    return (
        <MantineSwitch
            label={
                showTooltip ? (
                    <Group spacing="var(--mantine-spacing-2xs)">
                        <Text span fw={400}>
                            {label}
                        </Text>
                        <Tooltip withArrow label={tooltipText || ''}>
                            <Icon type="IconHelp" size="xs" color="gray" />
                        </Tooltip>
                    </Group>
                ) : (
                    label
                )
            }
            labelProps={{
                fw: 400
            }}
            checked={checked}
            onChange={onChange}
            classNames={{
                root: cx(fullWidth ? classes.fullWidthRoot : ''),
                body: fullWidth ? classes.fullWidthBody : '',
                input: classes.input,
                track: classes.track,
                label: classes.label
            }}
            labelPosition={labelPosition}
            {...props}
        />
    );
};

export default Switch;
