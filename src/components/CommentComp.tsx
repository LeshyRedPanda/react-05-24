import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

const CommentComp: FC<IProps> = ({comment}) => {
    console.log('Comment :', comment)
    console.log('Comment Name :', comment.name)

    return (
        <div className={'divTxt'}>
            <p>
                Comment : {comment.name}
            </p>
            <br/><br/>
            <p>
                Comment Body : {comment.body}
            </p>
            <br/><br/>
            <hr/>

        </div>
    );
};

export default CommentComp;
