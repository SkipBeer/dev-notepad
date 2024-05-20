import React, { useState } from 'react';
import { CourseList } from '../../components/CourseList/CourseList';
import { useEffect } from 'react';
import styles from './Courses.module.css'
import { CourseService }  from '../../API/CourseService';
import { Button } from '../../components/Button/Button';
import Popup from '../../components/Popup/Popup';
import { CreateCourseForm } from '../../components/CreateCourseForm/CreateCourseForm';

function Courses() {
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false)
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchCourses()
  }, [])

  async function fetchCourses() {
    setIsLoading(true)
    const course = await CourseService.getCourses();
    setCourses(course)
    setIsLoading(false)
  }

  const createCourse = async (newCourse) => {
    const course = await CourseService.createCourse(newCourse)
    setCourses([...courses, course])
    setIsCreatePopupOpen(false)
  }

  return (
    <>
      <div className={styles.Courses}>
      <div className={styles.header}> 
          <h1>Все курсы</h1>
          <Button onClick={() => setIsCreatePopupOpen(true)}>Добавить курс</Button>
          {isCreatePopupOpen && <Popup close={() => setIsCreatePopupOpen(false)} title={'Добавить курс'}>
            <CreateCourseForm create={createCourse} />
          </Popup>}
      </div>
        {isLoading
          ? <h1>Загрузка...</h1>
          : <CourseList courses={courses} title={'Все курсы'} />
        }
      </div>
    </>
  )
}

export default Courses