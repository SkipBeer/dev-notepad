import styles from './CourseList.module.css';
import { Course } from '../Course/Course';

export const CourseList = ({ courses}) => {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {courses.map((course, index)=> 
                    <Course number={index+1} key={course.id} course={course} />
                )}
            </div>
        </div>
    )
}