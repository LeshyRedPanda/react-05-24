import React, {FC, useEffect, useState} from 'react';
import {userApiService} from "../services/api.service";
import {ICommentModel} from "../models/ICommentModel";
import CommentComponent from "./CommentComponent";

interface IProps{
    comments:ICommentModel[]
}

const CommentsComponent:FC<IProps> = ({comments}) => {

    // const [comments, setComments] = useState<ICommentModel[]>([])
    //
    // useEffect(() => {
    //     userApiService.getAllComments().then(value => setComments(value.data))
    // }, []);

    return (
        <div>
            {comments.map(comment =><CommentComponent key={comment.id} comment={comment}/>)}
            <hr/>
        </div>
    );
};

export default CommentsComponent;