import {
    CloseButton as MantineCloseButton,
    CloseButtonProps as MantineCloseButtonProps
} from '@mantine/core';

import { type StrictButtonProps } from '../../../types/props';

export type CloseButtonProps = StrictButtonProps<
    MantineCloseButtonProps,
    'color'
>;

const CloseButton = (props: CloseButtonProps) => {
    return <MantineCloseButton variant="subtle" {...props} />;
};

export default CloseButton;
