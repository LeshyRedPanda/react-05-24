import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import PostComp from "./PostComp";

interface IProps{
    posts:IPostModel[]
}

const PostsComp:FC<IProps> = ({posts}) => {


    return (
        <div>

            {posts.map(post => <PostComp key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComp;
//-------------------------------------------------------
