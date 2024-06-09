import React from 'react';
import {useStore} from "../context/ContextProvider";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {

    const {commentsStore: {allComments}} = useStore();

    return (
        <div>
            {allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;