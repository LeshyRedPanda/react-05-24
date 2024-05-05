import React, {FC, useEffect, useState} from 'react';
import {PostModel} from "../../models/postModel";
import PostComponent from "../post/PostComponent";
import {getAllPosts} from "../../services/jpg.api.service";


const PostsComponent = () => {
    const [posts,setPosts] = useState<PostModel[]>([]);
    useEffect(() =>{
        getAllPosts().then(({data}) => setPosts(data));
        },[]);
    return (
        <div>
            {posts.map((post) => (<PostComponent
                key={post.id}
                post={post}/>))}
        </div>
    );
};

export default PostsComponent;