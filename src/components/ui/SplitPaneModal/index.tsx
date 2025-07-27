/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: temp component needs refactor
import classes from './SplitPaneModal.module.css';
import Icon from '../Icon';

export function SplitPaneModal({
    isOpen,
    isClosable = true,
    icon,
    header,
    body,
    isBlurred = true,
    onClose,
    children
}: any) {
    return isOpen ? (
        <div
            className={`${classes.modalOverlay} ${
                isBlurred && classes.blurred
            }`}
        >
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
                                <Icon type="IconX" size="sm" />
                            </button>
                        )}
                    </div>
                    <div className={classes.bodyContent}>{children}</div>
                </div>
            </div>
        </div>
    ) : null;
}

export function SplitPaneModalContent({ header, body, children }: any) {
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

export function SplitPaneModalActions({ children }: any) {
    return <div className={classes.actionsContainer}>{children}</div>;
}

export default SplitPaneModal;
