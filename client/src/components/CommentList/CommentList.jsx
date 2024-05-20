import { Comment } from '../Comment/Comment'
import { CommentForm } from '../CommentForm/CommentForm';


export const CommentList = ({ comments, createComment, deleteComment }) => {
    return (
        <>
            <h3>Комментарии</h3>
           <CommentForm create={createComment}/>
            {comments.map((comment) => <Comment key={comment.id} comment={comment} deleteComment={deleteComment}/>)}
        </>
    )
}