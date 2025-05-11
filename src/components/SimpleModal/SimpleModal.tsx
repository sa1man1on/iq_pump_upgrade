import React from 'react';
import styles from './SimpleModal.module.scss';

interface SimpleModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

const SimpleModal: React.FC<SimpleModalProps> = ({isOpen, onClose, title, content}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                </div>
                <div className={styles.body}>
                    <p>{content}</p>
                </div>
                <div className={styles.footer}>
                    <button
                        onClick={onClose}
                        className={styles.button}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SimpleModal;