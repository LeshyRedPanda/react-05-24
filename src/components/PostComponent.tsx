import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps{
    post:IPostModel
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <div>
                Post ID : {post.id}<br/>
                Post title : {post.title}<br/>
                Post body : {post.body}
                <br/><br/></div>
        </div>
    );
};

export default PostComponent;