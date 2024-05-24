import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {Link} from "react-router-dom";


interface IProps{
    post:IPostModel
}

const PostComp:FC<IProps> = ({post}) => {
    return (
        <div>
            post ID : {post.id} <br/>
            Post Tittle : {post.title}

        </div>
    );
};

export default PostComp;
//-------------------------------------------------
