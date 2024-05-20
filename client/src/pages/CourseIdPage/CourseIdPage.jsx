import React from 'react';
import { useParams } from 'react-router-dom';
import { CourseInfo } from '../../components/CourseInfo/CourseInfo';
import { CourseService } from '../../API/CourseService';
import { useState, useEffect } from 'react';
import { CommentList } from '../../components/CommentList/CommentList';

function CourseIdPage() {
    const [course, setCourse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        fetchCourse()
      }, [])
    
    async function fetchCourse() {
        setIsLoading(true)
        const course = await CourseService.getCourse(id);
        setCourse(course)
        setIsLoading(false)
      }  
    
    return (
        <div>
            <div>
                {isLoading 
                    ? <h1>Загрузка...</h1> 
                    : <CourseInfo course={course}/>
                }
            </div>
        </div>
    );
}

export default CourseIdPage