import { type ReactNode } from 'react';

import Icon from '../ui/Icon';
// TODO: temp component needs refactor
import classes from './MiniModal.module.css';

export interface MiniModalActionsProps {
    /** Modal content. */
    children?: ReactNode;
}

export interface MiniModalContentProps {
    /** Text shown under the header. */
    body?: ReactNode;
    /** Modal content. */
    children?: ReactNode;
    /** Large title text. */
    header?: ReactNode;
}

export interface MiniModalProps {
    /** Modal content. */
    children?: ReactNode;
    /** Shows the close (X) button. */
    isClosable?: boolean;
    /** Whether the modal is shown. */
    isOpen?: boolean;
    /** Called when the close button is clicked. */
    onClose?: () => void;
}

/**
 * **Legacy custom inca-ui component** (not part of Mantine). Use `Modal` for new work.
 *
 * Small centered modal. Put `MiniModalContent` and `MiniModalActions` inside.
 */
export function MiniModal({
    children,
    isClosable = true,
    isOpen,
    onClose
}: MiniModalProps) {
    return isOpen ? (
        <div className={classes.miniModalOverlay}>
            <div className={classes.miniModal}>
                <div className={classes.miniModalHeader}>
                    {isClosable ? (
                        <button
                            className={classes.unstyledButton}
                            onClick={onClose}
                        >
                            <Icon size="sm" type="IconX" />
                        </button>
                    ) : (
                        <span>&nbsp;</span>
                    )}
                </div>
                <div className={classes.miniModalBody}>{children}</div>
            </div>
        </div>
    ) : null;
}

/**
 * Right-aligned action buttons for `MiniModal`.
 */
export function MiniModalActions({ children }: MiniModalActionsProps) {
    return <div className={classes.miniModalActions}>{children}</div>;
}

/**
 * Title (`header`), text (`body`) and extra content for `MiniModal`.
 */
export function MiniModalContent({
    body,
    children,
    header
}: MiniModalContentProps) {
    return (
        <div className={classes.miniModalContent}>
            <div>
                <div className={classes.modalText}>
                    <h2 className={classes.modalTitle}>{header}</h2>
                    <p className={classes.modalBody}>{body}</p>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
