import {
    CloseButton as MantineCloseButton,
    CloseButtonProps as MantineCloseButtonProps
} from '@mantine/core';

import { type StrictButtonProps } from '../../../types/props';

export type CloseButtonProps = StrictButtonProps<MantineCloseButtonProps>;

const CloseButton = (props: CloseButtonProps) => {
    return <MantineCloseButton {...props} />;
};

export default CloseButton;
