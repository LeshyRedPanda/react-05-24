import React from 'react';
import {useAppSelector} from "../redux_slices/store";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {

    const {comments, } = useAppSelector(state => state.commentSlice);
    // console.log(comments);

    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;