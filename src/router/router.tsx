import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DogsHomePage from "../pages/DogsHomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";


export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h3> OMG :-( </h3>,
        children: [
            {index: true, element: <DogsHomePage/>},
            {
                path: 'users', element: <UsersPage/>,
                children: [{path: ':id', element: <PostsPage/>,}]
            },
            {path: 'posts/:postId/comments', element: <CommentsPage/>}
        ]

    }
])
