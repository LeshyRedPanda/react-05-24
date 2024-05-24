import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";


export const routerConfig = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<h3> OMG :-( </h3>,
        children:[
            {index:true,element:<HomePage/>},
            {path:'users',element:<UsersPage/>,
                children:[
                    {path:':id',element:<PostsPage/>}
                ]

            },

        ]

    }
])
