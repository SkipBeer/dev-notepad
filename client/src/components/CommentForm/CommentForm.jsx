import React from 'react'
import { Button } from '../Button/Button';
import { useState } from 'react';
import styles from './CommentForm.module.css'

export const CommentForm = ({create}) => {
    const [comment, setComment] = useState({text: ''})

    const addComment = (e) => {
        e.preventDefault()
        create(comment)
        setComment({text: ''})
    }

    return (
        <form className={styles.form} onSubmit={addComment}>
            <input
                required
                value={comment.text}
                onChange={(e) => setComment({...comment, text: e.target.value})}
                type="text" 
                placeholder="Текст комментария" 
            />
            <Button type="submit">
                Отправить
            </Button>
        </form>
    )
}