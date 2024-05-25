import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps{
    comment:ICommentModel
}

const CommentComp:FC<IProps> = ({comment}) => {
    console.log('Comment :',comment)
    console.log('Comment . Name :',comment.name)

    return (
        <div>
            comments component

             comment name : {comment.name}
             comment body : {comment.body}



        </div>
    );
};

export default CommentComp;
