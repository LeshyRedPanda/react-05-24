import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {useNavigate} from "react-router-dom";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {

    const navigate = useNavigate();

    return (
        <div>
            <span>{post.id} - {post.title};</span>
            <button className={'btn'} onClick={() => {
                navigate(`/posts/${post.id}/comments`)
            }}>post comments here
            </button>
            <hr/>
        </div>
    );
};

export default PostComponent;