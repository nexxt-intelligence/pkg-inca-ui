import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { theme } from './constants/theme';
import './assets/global.css';

/** Extended Mantine UI Components */
export { default as Button, type ButtonProps } from './components/ui/Button';
export {
    default as ActionIcon,
    type ActionIconProps
} from './components/ui/ActionIcon';
export {
    default as CloseButton,
    type CloseButtonProps
} from './components/ui/CloseButton';

export {
    default as Checkbox,
    type CheckboxProps,
    type CheckboxGroupProps
} from './components/ui/Checkbox';
export {
    default as Radio,
    type RadioProps,
    type RadioGroupProps
} from './components/ui/Radio';
export { default as Switch, type SwitchProps } from './components/ui/Switch';
export { default as Tooltip, type TooltipProps } from './components/ui/Tooltip';

export {
    default as TextInput,
    type TextInputProps
} from './components/ui/TextInput';
export {
    default as TextArea,
    type TextAreaProps
} from './components/ui/TextArea';
export {
    default as NumberInput,
    type NumberInputProps
} from './components/ui/NumberInput';
export {
    default as SegmentedControl,
    type SegmentedControlProps
} from './components/ui/SegmentedControl';
export { default as Label, type LabelProps } from './components/ui/Label';

export { default as Select, type SelectProps } from './components/ui/Select';
export { default as Icon, type TablerIconKeys } from './components/ui/Icon';
export { default as ColorInput } from './components/ui/ColorInput';

export { default as Input, type InputProps } from './components/ui/Input';
export { default as AppShell } from './components/ui/AppShell';
export { default as Alert, type AlertProps } from './components/ui/Alert';
export { default as List, type ListProps } from './components/ui/List';
export { default as CollapsibleContainer } from './components/CollapsibleContainer';
export { default as Tabs } from './components/ui/Tabs';
export { default as MultiSelect } from './components/ui/MultiSelect';
export { default as Menu, type MenuProps } from './components/ui/Menu';
export { default as Text } from './components/ui/Text';
export { default as QuestionSelectItem } from './components/ui/Select/SelectItem/QuestionSelectItem';
export { default as FontSelectItem } from './components/ui/Select/SelectItem/FontSelectItem';
export { default as Badge } from './components/ui/Badge';

/** UI Components from OLD inca ui */
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

/** Constants */
export * from './constants/theme';

export { useConfirmationModal } from './hooks';

export const CustomMantineProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <MantineProvider theme={theme} withCSSVariables>
            <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
    );
};

/** Unmodified Mantine v6.0.21 Components */
// Layout
export {
    AspectRatio,
    Center,
    Container,
    Flex,
    Grid,
    Group,
    MediaQuery,
    SimpleGrid,
    Space,
    Stack
} from '@mantine/core';

// Inputs
export {
    //
    Slider,
    PasswordInput,
    PinInput,
    TransferList
} from '@mantine/core';

// Navigation
export {
    //
    Anchor,
    Breadcrumbs,
    Pagination
} from '@mantine/core';

// Data display
export {
    BackgroundImage,
    Image,
    Indicator,
    Kbd,
    Spoiler,
    Timeline
} from '@mantine/core';

// Overlay
export {
    Affix,
    Dialog,
    Drawer,
    HoverCard,
    LoadingOverlay,
    Overlay,
    Popover
} from '@mantine/core';

// Typography
export {
    //
    Blockquote,
    Code,
    Highlight,
    Mark,
    Table,
    Title
} from '@mantine/core';

// Feedback
export {
    Loader,
    Notification,
    Progress,
    RingProgress,
    Skeleton
} from '@mantine/core';

// Miscellaneous
export {
    Box,
    Collapse,
    Divider,
    Paper,
    Portal,
    ScrollArea
} from '@mantine/core';
