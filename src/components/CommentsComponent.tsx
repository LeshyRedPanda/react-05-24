import React, {useEffect, useState} from 'react';
import {userApiService} from "../services/api.service";
import {ICommentModel} from "../models/ICommentModel";

const CommentsComponent = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        userApiService.getAllComments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            {comments.map(comment =>
                <div key={comment.id}>
                Name : {comment.name}<br/>
                email : {comment.email}<br/>
                Body : {comment.body}
                <br/> <br/></div>)}
            <hr/>
        </div>
    );
};

export default CommentsComponent;