import { CommentList } from '../CommentList/CommentList';
import styles from './CourseInfo.module.css'
import { useState } from 'react';
import { CourseService } from '../../API/CourseService';


export const CourseInfo = ({ course }) => {
    if(!course) return null;
    const [comments, setComments] = useState(course.comments)

    const createComment = async (newComment) => {
        const comment = await CourseService.addComment(course.id, newComment)
        setComments([...comments, comment])
    }

    const deleteComment = async (commentId) => {
        await CourseService.deleteComment(course.id, commentId)
        setComments(comments.filter(comment => comment.id !== commentId))
    }

    return (
       <div className={styles.course__info}>
            <h1 className={styles.header}>{course.title}</h1>
            <div className={styles.description}>
                {course.description}
            </div>
           <CommentList createComment={createComment} comments={comments} deleteComment={deleteComment}/>
       </div>
    )
}