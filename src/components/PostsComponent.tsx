import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {userApiService} from "../services/api.service";
import PostComponent from "./PostComponent";

const PostsComponent:FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        userApiService.getAllPosts().then(value => setPosts(value.data))
    }, []);


    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
            <hr/>
        </div>
    );
};

export default PostsComponent;