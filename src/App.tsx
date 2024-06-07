import React, {FC, useEffect, useState} from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import {Outlet} from "react-router-dom";
import userService from "./services/userService";
import postService from "./services/postService";
import {Context} from "./context/ContextProvider"; // provide context with storage
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import commentService from "./services/commentService";
import {ICommentModel} from "./models/ICommentModel";

const App: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        userService.getUsers().then(val => setUsers(val.data))
        postService.getPosts().then(val => setPosts(val.data))
        commentService.getComments().then(val=> setComments(val.data))
    }, []);
    return (
        <div>

            <HeaderComponent/>
            {/*PROVIDE - data from context*/}
            <Context.Provider value={{
                userStore:
                    {allUsers: users},
                postsStore:
                    {allPosts: posts},
                commentsStore:
                    {allComments: comments}
            }}>
                <Outlet/>
            </Context.Provider>

        </div>

    );
}

export default App;