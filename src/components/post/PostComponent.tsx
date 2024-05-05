import React,{FC} from 'react';
import {PostModel} from '../../models/postModel';
interface IProps{
    post:PostModel;
}

type IPropsType = IProps;
const PostComponent: FC<IPropsType> = ({post}) => {
    return (
        <div>
            <ul>
                <li>User ID : {post.userId} ; Post ID : {post.id}</li>
                <li>Post Title : {post.title}</li>
                <li>Post : {post.body}</li>
            </ul>
            <hr/>
        </div>

    );
};

export default PostComponent;