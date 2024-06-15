import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            {comment.id} - {comment.name};
            <hr/>
        </div>
    );
};

export default CommentComponent;