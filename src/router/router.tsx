import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";
import MainLayout from "../layout/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";






export const routerConfig = createBrowserRouter([
    {path:'/',
        element:<MainLayout/>,
        errorElement:<h2> something go wrong</h2>,
        children:[
            {index:true,element:<HomePage/>,}, // default page
            {path:'users',element:<UsersPage/>,
            //add children to UsersPage / add Outlet
            //     children:[
            //         {path:'/:id',element:<UsersPage/>}
            //     ]
            },
            //add new page :
            {path:'users/:id',element:<PostsPage/>},
            {path:'/posts/:postId/comments',element:<CommentsPage/>}
        ]
    }
])


// export const routerConfig = createBrowserRouter([
//     {path:'/',
//         element:<MainLayout/>,
//         errorElement:<h2> something go wrong</h2>,
//         children:[
//             {index:true,element:<HomePage/>,}, // default page
//             {path:'users',element:<UsersPage/>},
//                 // children:[{
//                         // add outlet to usersPage user posts page
//                 //     {path:':id',element:<PostsPage/>}]
//                 // },
//             {path:'users/:id',element:<PostsPage>},
//
//
//         ]
//
//     }
// ])












