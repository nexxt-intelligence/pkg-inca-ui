import {
    CloseButton as MantineCloseButton,
    CloseButtonProps as MantineCloseButtonProps
} from '@mantine/core';

export type CloseButtonProps = MantineCloseButtonProps;

const CloseButton = (props: CloseButtonProps) => {
    return <MantineCloseButton variant="subtle" {...props} />;
};

export default CloseButton;
