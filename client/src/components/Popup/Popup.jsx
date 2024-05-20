import styles from './Popup.module.css';

export default function Popup({ children, title, close, ...props }) {

    return (
        <div className={styles.popup_bg} onMouseDown={close}>
            <div className={styles.popup} onMouseDown={(e) => e.stopPropagation()} {...props}>
                <div className={styles.header}>
                    <h3>{title}</h3>
                </div>
                {children}
            </div>
        </div>
    );
}