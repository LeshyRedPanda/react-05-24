import React, {FC, useEffect, useState} from 'react';
import {PostModel} from "../../models/postModel";
import PostComponent from "../post/PostComponent";
import {getAllSinglePost} from "../../services/jpg.api.service";

interface IProps {
    posts: PostModel[];
}

const PostsComponent:FC<IProps> = ({posts}) => {

    return(
        <div>
            {
                posts.map((post:PostModel) => <PostComponent key={post.id} post={post} />)
            }
        </div>
    )
};

export default PostsComponent;