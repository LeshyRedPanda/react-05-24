import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import React from "react";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import CommentsPage from "../pages/CommentsPage";
import UserInfoPage from "../pages/UserInfoPage";
import PostCommentsPage from "../pages/PostCommentsPage";

const routes: RouteObject[] = [{
    path: '', element: <App/>, children: [
        {path: 'users', element: <UsersPage/>},
        {path: 'users/:id', element: <UserInfoPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'comments', element: <CommentsPage/>},
        {path: 'posts/:id/comments', element: <PostCommentsPage/>}
    ]
}]

export const router = createBrowserRouter(routes);