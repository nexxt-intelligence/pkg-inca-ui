/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: temp component needs refactor
import classes from './MiniModal.module.css';
import Icon from '../Icon';

export function MiniModal({
    isOpen,
    isClosable = true,
    onClose,
    children
}: any) {
    return isOpen ? (
        <div className={classes.miniModalOverlay}>
            <div className={classes.miniModal}>
                <div className={classes.miniModalHeader}>
                    {isClosable ? (
                        <button
                            className={classes.unstyledButton}
                            onClick={onClose}
                        >
                            <Icon type="IconX" size="sm" />
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

export function MiniModalContent({ header, body, children }: any) {
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

export function MiniModalActions({ children }: any) {
    return <div className={classes.miniModalActions}>{children}</div>;
}
