import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import PostComp from "./PostComp";

interface IProps{
    post:IPostModel[]
}

const PostsComp:FC<IProps> = ({post}) => {


    return (
        <div>

            {posts.map(post => <PostComp key={post.id} post={post}/>)}




        </div>
    );
};

export default PostsComp;