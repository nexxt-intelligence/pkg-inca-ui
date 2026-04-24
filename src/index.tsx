import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

import { theme } from './constants/theme';
import './assets/global.css';

export {
    default as ActionCard,
    type ActionCardProps
} from './components/ActionCard';
export {
    default as ChatInput,
    type ChatInputProps
} from './components/ChatInput';
export {
    default as CollapsibleContainer,
    type CollapsibleContainerProps
} from './components/CollapsibleContainer';

// TODO: Remove these
export { default as Input, type InputProps } from './components/Input';
/** UI Components from OLD inca ui */
export {
    MiniModal,
    MiniModalActions,
    MiniModalContent
} from './components/MiniModal';
export {
    default as RichTextEditor,
    type RichTextEditorHandle,
    type RichTextEditorProps
} from './components/RichTextEditor';
export {
    default as SplitButton,
    type SplitButtonProps
} from './components/SplitButton';
export {
    SplitPaneModal,
    SplitPaneModalActions,
    SplitPaneModalContent
} from './components/SplitPaneModal';
/** Extended Mantine UI Components */
export {
    default as ActionIcon,
    type ActionIconProps
} from './components/ui/ActionIcon';
export { default as Alert, type AlertProps } from './components/ui/Alert';
export {
    default as AppShell,
    type AppShellProps
} from './components/ui/AppShell';
export { default as Badge, type BadgeProps } from './components/ui/Badge';
export { default as Button, type ButtonProps } from './components/ui/Button';
export {
    default as Checkbox,
    type CheckboxGroupProps,
    type CheckboxProps
} from './components/ui/Checkbox';
export {
    default as CloseButton,
    type CloseButtonProps
} from './components/ui/CloseButton';
export {
    default as ColorInput,
    type ColorInputProps
} from './components/ui/ColorInput';
export { default as Icon, type TablerIconKeys } from './components/ui/Icon';
export { default as Label, type LabelProps } from './components/ui/Label';
export { default as List, type ListProps } from './components/ui/List';
export { default as Menu, type MenuProps } from './components/ui/Menu';
export { default as Modal, type ModalProps } from './components/ui/Modal';
export {
    default as MultiSelect,
    type MultiSelectProps
} from './components/ui/MultiSelect';
export {
    default as NumberInput,
    type NumberInputProps
} from './components/ui/NumberInput';
export { default as Prism, type PrismProps } from './components/ui/Prism';
export {
    default as Radio,
    type RadioGroupProps,
    type RadioProps
} from './components/ui/Radio';
export {
    default as SegmentedControl,
    type SegmentedControlProps
} from './components/ui/SegmentedControl';
export { default as Select, type SelectProps } from './components/ui/Select';
export { default as FontSelectItem } from './components/ui/Select/SelectItem/FontSelectItem';
export { default as QuestionSelectItem } from './components/ui/Select/SelectItem/QuestionSelectItem';
export { default as Switch, type SwitchProps } from './components/ui/Switch';
export { default as Tabs, type TabsProps } from './components/ui/Tabs';
export { default as Text, type TextProps } from './components/ui/Text';
export {
    default as TextArea,
    type TextAreaProps
} from './components/ui/TextArea';
export {
    default as TextInput,
    type TextInputProps
} from './components/ui/TextInput';
export { default as Tooltip, type TooltipProps } from './components/ui/Tooltip';

/** Constants */
export * from './constants/theme';

export { type ConfirmationModalProps, useConfirmationModal } from './hooks';

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
    type AspectRatioProps,
    Center,
    type CenterProps,
    Container,
    type ContainerProps,
    Flex,
    type FlexProps,
    Grid,
    type GridProps,
    Group,
    type GroupProps,
    MediaQuery,
    type MediaQueryProps,
    SimpleGrid,
    type SimpleGridProps,
    Space,
    type SpaceProps,
    Stack,
    type StackProps
} from '@mantine/core';

// Buttons
export {
    //
    CopyButton,
    type CopyButtonProps,
    FileButton,
    type FileButtonProps
} from '@mantine/core';

// Inputs
export {
    //
    Autocomplete,
    type AutocompleteProps,
    Chip,
    type ChipProps,
    FileInput,
    type FileInputProps,
    JsonInput,
    type JsonInputProps,
    PasswordInput,
    type PasswordInputProps,
    PinInput,
    type PinInputProps,
    Rating,
    type RatingProps,
    Slider,
    type SliderProps,
    TransferList,
    type TransferListProps
} from '@mantine/core';

// Navigation
export {
    //
    Anchor,
    type AnchorProps,
    Breadcrumbs,
    type BreadcrumbsProps,
    Pagination,
    type PaginationProps
} from '@mantine/core';

// Data display
export {
    BackgroundImage,
    type BackgroundImageProps,
    Card,
    type CardProps,
    ColorSwatch,
    type ColorSwatchProps,
    Image,
    type ImageProps,
    Indicator,
    type IndicatorProps,
    Kbd,
    type KbdProps,
    Spoiler,
    type SpoilerProps,
    Timeline,
    type TimelineProps
} from '@mantine/core';

// Overlay
export {
    Affix,
    type AffixProps,
    Dialog,
    type DialogProps,
    Drawer,
    type DrawerProps,
    HoverCard,
    type HoverCardProps,
    LoadingOverlay,
    type LoadingOverlayProps,
    Overlay,
    type OverlayProps,
    Popover,
    type PopoverProps
} from '@mantine/core';

// Typography
export {
    //
    Blockquote,
    type BlockquoteProps,
    Code,
    type CodeProps,
    Highlight,
    type HighlightProps,
    Mark,
    type MarkProps,
    Table,
    type TableProps,
    Title,
    type TitleProps
} from '@mantine/core';

// Feedback
export {
    Loader,
    type LoaderProps,
    Notification,
    type NotificationProps,
    Progress,
    type ProgressProps,
    RingProgress,
    type RingProgressProps,
    Skeleton,
    type SkeletonProps
} from '@mantine/core';

// Miscellaneous
export {
    Box,
    type BoxProps,
    Collapse,
    type CollapseProps,
    Divider,
    type DividerProps,
    FocusTrap,
    type FocusTrapProps,
    Paper,
    type PaperProps,
    Portal,
    type PortalProps,
    ScrollArea
} from '@mantine/core';
