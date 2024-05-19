import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";
import MainLayout from "../layout/MainLayout";

export const routerConfig = createBrowserRouter([
    {path:'/',
        element:<MainLayout/>,
        errorElement:<h2> something wrong</h2>,
        children:[
            {
                index:true,element:<HomePage/>,

            },
            {
                path:'users',element:<UsersComponent/>
            },
            {
                path:'posts',element:<PostsComponent/>
            },
            {
                path:'comments',element:<CommentsComponent/>
            }
        ]

    }
])












