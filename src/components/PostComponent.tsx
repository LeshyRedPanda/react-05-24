import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {Link} from "react-router-dom";

interface IProps{
    post:IPostModel
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            Post ID : {post.id}<br/>
                Post title : {post.title} <br/>
                Post body : {post.body} <br/>
            {/*   /posts/1/comments    */}
            <Link to={`/posts/${post.id}/comments`}>comments btn</Link>
            <br/><br/>
            <hr/>
        </div>
    );
};

export default PostComponent;