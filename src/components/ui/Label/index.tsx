import Tooltip from '../Tooltip';
import Icon from '../Icon';

export interface LabelProps {
    label: string;
    tooltip?: string;
}
const Label = ({ label, tooltip }: LabelProps) => {
    return (
        <>
            {label}
            {tooltip ? (
                <Tooltip label={tooltip}>
                    <Icon type="IconHelp" size="xs" color="gray" />
                </Tooltip>
            ) : null}
        </>
    );
};

export default Label;
