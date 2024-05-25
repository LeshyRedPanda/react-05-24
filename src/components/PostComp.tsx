import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {useNavigate} from "react-router-dom";


interface IProps{
    post:IPostModel
}

const PostComp:FC<IProps> = ({post}) => {
    console.log(post.id)
    const navigator = useNavigate()


    return (
        <div>
            post ID : {post.id} <br/>
            Post Tittle : {post.title}
            <button onClick={() => {
                // navigator(`/posts/${post.id}/comments`,)
                navigator(`/posts/${post.id}/comments`)
            }}>comments btn
            </button>

            <hr/>

        </div>
    );
};

export default PostComp;
//-------------------------------------------------
