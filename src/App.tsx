import React, {FC, useEffect} from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {useStore} from "./context/ContextProvider";
import userService from "./services/userService";
import postService from "./services/postService";
import commentService from "./services/commentService";

const App: FC = () => {

    const {userStore,userStore:{loadUsers}} = useStore();
    const {postsStore,postsStore:{loadPosts}} = useStore();
    const {commentsStore,commentsStore:{loadComments}} = useStore();


    useEffect(() => {
        userService.getUsers().then(users => {
            console.log(users.data)
            userStore.loadUsers(users.data)
        });
            postService.getPosts().then(posts => {
                console.log(posts.data)
                postsStore.loadPosts(posts.data)
            });
            commentService.getComments().then(comments => {
                console.log(comments.data)
                commentsStore.loadComments(comments.data)
            })

    }, [loadUsers,loadPosts,loadComments]);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>

    );
}

export default App;