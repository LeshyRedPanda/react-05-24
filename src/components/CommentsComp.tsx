import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import CommentComp from "./CommentComp";

interface IPops{
    comments:ICommentModel[]
}

const CommentsComp:FC<IPops> = ({comments}) => {



    return (
        <div>
            {comments.map(comment => <CommentComp key={comment.id} comment={comment}/>)}

        </div>
    );
};

export default CommentsComp;