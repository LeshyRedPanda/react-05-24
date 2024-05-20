import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import PostComponent from "./PostComponent";


interface IProps{
    posts:IPostModel[]
}

const PostsComponent:FC<IProps> = ({posts}) => {
    console.log(posts)
    // const {id} = useParams();
    // console.log(useParams())

    // const [posts, setPosts] = useState<IPostModel[]>([])

    // useEffect(() => {
    //     userApiService.getAllPosts().then(value => setPosts(value.data))
    // }, []);


    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}

            <hr/>
        </div>
    );
};

export default PostsComponent;