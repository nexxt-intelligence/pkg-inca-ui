/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from '../ui/Icon';
// TODO: temp component needs refactor
import classes from './MiniModal.module.css';

export function MiniModal({
    children,
    isClosable = true,
    isOpen,
    onClose
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

export function MiniModalActions({ children }: any) {
    return <div className={classes.miniModalActions}>{children}</div>;
}

export function MiniModalContent({ body, children, header }: any) {
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
