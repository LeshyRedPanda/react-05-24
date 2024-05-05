import React,{FC} from 'react';
import {PostModel} from '../../models/postModel';
interface IProps{
    post:PostModel;
}

type IPropsType = IProps;
const PostComponent: FC<IPropsType> = ({post}) => {
    return (
        <div>
            <br/>
            User ID : {post.userId}
            <br/>
            Post ID : {post.id}
            <br/>
            Post title : {post.title}
            <br/>
            {post.body}
            <br/>
            <br/>


        </div>

    );
};

export default PostComponent;