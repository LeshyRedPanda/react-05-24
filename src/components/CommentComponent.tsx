import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <hr/>
            <span> {comment.id} - {comment.name} ;</span>

        </div>
    );
};

export default CommentComponent;