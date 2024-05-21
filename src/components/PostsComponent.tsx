import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import PostComponent from "./PostComponent";


interface IProps{
    posts:IPostModel[]
}

const PostsComponent:FC<IProps> = ({posts}) => {
    console.log(posts)

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}

            <hr/>
        </div>
    );
};

export default PostsComponent;