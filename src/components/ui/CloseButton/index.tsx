import {
    CloseButton as MantineCloseButton,
    CloseButtonProps as MantineCloseButtonProps
} from '@mantine/core';

import { type StrictButtonProps } from '../../../types/props';

export type CloseButtonProps = StrictButtonProps<
    MantineCloseButtonProps,
    'color'
>;

/**
 * The X button. Mantine [CloseButton](https://v6.mantine.dev/core/close-button/) with inca-ui defaults.
 */
const CloseButton = (props: CloseButtonProps) => {
    return <MantineCloseButton variant="subtle" {...props} />;
};

export default CloseButton;
