import React, {useEffect} from 'react';
import {useStore} from "../context/ContextProvider";
import CommentComponent from "./CommentComponent";
import commentService from "../services/commentService";

const CommentsComponent = () => {
    const {commentsStore,commentsStore:{allComments}} = useStore();
    useEffect(() => {
        commentService.getComments().then(comments => {
            commentsStore.loadComments(comments.data)
        })
    }, );


    return (
        <div>
            {allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;