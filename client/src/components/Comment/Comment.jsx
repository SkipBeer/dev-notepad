import styles from './Comment.module.css'
import { Button } from '../Button/Button';

export const Comment = ({ comment, deleteComment }) => {
    return (
        <div className={styles.comment}>
            <div className={styles.info}>
                <strong className={styles.author}>{comment.author}</strong>
                <span className={styles.text}>
                    {comment.text}
                </span>
            </div>
            <Button onClick={() => deleteComment(comment.id)}>Удалить</Button>
        </div>
    )
}