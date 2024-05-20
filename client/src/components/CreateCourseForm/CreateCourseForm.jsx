import styles from './CreateCourseForm.module.css';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const CreateCourseForm = ({create}) => {
    const [course, setCourse] = useState({title: '', description: ''})

    const addNewCourse = (e) => {
        e.preventDefault()
        create(course)
    }

    return (
            <form className={styles.createCourseForm} onSubmit={addNewCourse}>
                <input
                    required
                    value={course.title}
                    onChange={(e) => setCourse({...course, title: e.target.value})} 
                    type="text"
                    placeholder="Название курса" 
                />
                <input
                    required
                    value={course.description}
                    onChange={(e) => setCourse({...course, description: e.target.value})} 
                    type="text" 
                    placeholder="Описание курса"
                />
                <Button type="submit">Добавить курс</Button>
            </form>
    )
}