import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {useNavigate} from "react-router-dom";

interface IProps {
    post: IPostModel
}

const PostComp: FC<IProps> = ({post}) => {
    console.log(post.id)
    const navigate = useNavigate()
    const handleCommentsClick = () => {
        navigate(`/posts/${post.id}/comments`, {state: {postId: post.id}});
    };
    return (
        <div className={'divTxt'}>
            <p>
                post ID : {post.id}
                Post Tittle : {post.title}
            </p>
            <button className={'btn'} onClick={handleCommentsClick}>Comment Button</button>
            <br/><br/>
        </div>
    );
};

export default PostComp;