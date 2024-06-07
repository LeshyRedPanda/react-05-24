import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <hr/>
            <span>{post.id} - Post Title : {post.title} ;</span><br/>
        </div>
    );
};

export default PostComponent;