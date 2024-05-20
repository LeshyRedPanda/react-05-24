import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps{
    comment:ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>

            <div>
                Name : {comment.name}<br/>
                email : {comment.email}<br/>
                Body : {comment.body}
                <br/> <br/></div>

        </div>
    );
};

export default CommentComponent;