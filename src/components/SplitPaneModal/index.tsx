import { type ReactNode } from 'react';

import { cx } from '../../utils/cx';
import Icon from '../ui/Icon';
// TODO: temp component needs refactor
import classes from './SplitPaneModal.module.css';

export interface SplitPaneModalActionsProps {
    /** Content of the right pane. */
    children?: ReactNode;
}

export interface SplitPaneModalContentProps {
    /** Text shown under the header. */
    body?: ReactNode;
    /** Content of the right pane. */
    children?: ReactNode;
    /** Large title text. */
    header?: ReactNode;
}

export interface SplitPaneModalProps {
    /** Text shown under the header. */
    body?: ReactNode;
    /** Content of the right pane. */
    children?: ReactNode;
    /** Large title text. */
    header?: ReactNode;
    /** Icon shown above the title in the left pane. */
    icon?: ReactNode;
    /** Blurs the page behind the overlay. */
    isBlurred?: boolean;
    /** Shows the close (X) button. */
    isClosable?: boolean;
    /** Whether the modal is shown. */
    isOpen?: boolean;
    /** Called when the close button is clicked. */
    onClose?: () => void;
}

/**
 * **Legacy custom inca-ui component** (not part of Mantine).
 *
 * Two-column modal: a colored intro panel on the left and your content on the right.
 */
export function SplitPaneModal({
    body,
    children,
    header,
    icon,
    isBlurred = true,
    isClosable = true,
    isOpen,
    onClose
}: SplitPaneModalProps) {
    return isOpen ? (
        <div className={cx(classes.modalOverlay, isBlurred && classes.blurred)}>
            <div className={classes.modalContent}>
                <div className={classes.modalHeader}>
                    <div className={classes.headerContent}>
                        {icon}
                        <h2 className={classes.headerTitle}>{header}</h2>
                        <p className={classes.headerDescription}>{body}</p>
                    </div>
                </div>
                <div className={classes.modalBody}>
                    <div className={classes.closeButtonContainer}>
                        <span>&nbsp;</span>
                        {isClosable && (
                            <button
                                className={classes.closeButton}
                                onClick={onClose}
                            >
                                <Icon size="sm" type="IconX" />
                            </button>
                        )}
                    </div>
                    <div className={classes.bodyContent}>{children}</div>
                </div>
            </div>
        </div>
    ) : null;
}

/**
 * Right-aligned action buttons for `SplitPaneModal`.
 */
export function SplitPaneModalActions({
    children
}: SplitPaneModalActionsProps) {
    return <div className={classes.actionsContainer}>{children}</div>;
}

/**
 * Title (`header`), text (`body`) and extra content for the right pane of `SplitPaneModal`.
 */
export function SplitPaneModalContent({
    body,
    children,
    header
}: SplitPaneModalContentProps) {
    return (
        <div className={classes.modalContentWrapper}>
            <div>
                <div className={classes.modalContentHeader}>
                    <h2 className={classes.contentTitle}>{header}</h2>
                    <p className={classes.contentDescription}>{body}</p>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default SplitPaneModal;
