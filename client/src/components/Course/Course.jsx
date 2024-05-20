import styles from './Course.module.css';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export const Course = ({ children, number, ...props }) => {
    const router = useNavigate()

    return (
        <div className={styles.course}>
            <div className={styles.course__content}>
                <strong>{number}. {props.course.title}</strong>
                <div className={styles.course__description}>
                    {props.course.description}
                </div>
            </div>
            <div className={styles.course__button}>
                    <Button onClick={() => router(`/courses/${props.course.id}`)}>
                        Подробнее
                    </Button>
            </div>
        </div>
    )
}