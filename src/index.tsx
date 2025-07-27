
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { theme } from './constants/theme';
import './assets/global.css';

{/** Extended Mantine UI Components */}
export { default as Button, type ButtonProps } from './components/ui/Button';
export { default as Input, type InputProps } from './components/ui/Input';
export { default as Switch, type SwitchProps } from './components/ui/Switch';
export { default as RadioGroup, type RadioGroupProps } from './components/ui/RadioGroup';
export { default as Checkbox, type CheckboxProps } from './components/ui/Checkbox';
export { default as Tooltip, type TooltipProps } from './components/ui/Tooltip';
export { default as AppShell } from './components/ui/AppShell';
export { default as Alert, type AlertProps } from './components/ui/Alert';
export { default as List, type ListProps } from './components/ui/List';
export { default as CollapsibleContainer } from './components/CollapsibleContainer';
export { default as Tabs } from './components/ui/Tabs';
export { default as ActionIcon } from './components/ui/ActionIcon';
export { default as Select } from './components/ui/Select';
export { default as MultiSelect } from './components/ui/MultiSelect';
export { default as Menu, type MenuProps } from './components/ui/Menu';
export { default as CloseButton } from './components/ui/CloseButton';
export { default as Text } from './components/ui/Text';
export { default as QuestionSelectItem } from './components/ui/Select/SelectItem/QuestionSelectItem';
export { default as FontSelectItem } from './components/ui/Select/SelectItem/FontSelectItem';
export { default as Badge } from './components/ui/Badge';
export { default as Icon } from './components/ui/Icon';
export { default as ColorInput } from './components/ui/ColorInput';

{/** UI Components from OLD inca ui */}
export {
    MiniModal,
    MiniModalContent,
    MiniModalActions
} from './components/ui/MiniModal';
export {
    SplitPaneModal,
    SplitPaneModalActions,
    SplitPaneModalContent
} from './components/ui/SplitPaneModal';


{/** Constants */}
export * from './constants/theme';

export { useConfirmationModal } from './hooks'

export const CustomMantineProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {

    return (
        <MantineProvider theme={theme} 
            withCSSVariables
            >
            <ModalsProvider>
                {children}
            </ModalsProvider>
        </MantineProvider>
    );
};
