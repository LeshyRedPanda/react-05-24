import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import React from "react";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";

export const routerConfig = createBrowserRouter([
        // {path: '/', element: <MainLayout/>},
        // {path: '/ok', element: <h2>OK OK OK OK PAGE 2 </h2>},
        // {path: '/no', element: <h2>NO NO NO PAGE 3 </h2>},
        // {path: '/yes', element: <h2>YES YES YES PAGE 4 </h2>},
        // {path: '/home', element: <h2>home home home PAGE 5 </h2>},
        // {path: '/babalymaga', element: <h2>babalymaga babalymaga babalymaga PAGE 6 </h2>},
        {path: '/',
            element: <MainLayout/>,
            children:[      //children is Outlet in Layout
                // {path:'home',element:<HomePage/>},      // path to children without '/'
                {index:true,element:<HomePage/>},      // index:true - makes this page default page
                {path:'users',element:<UsersComponent/>}
            ]

        },
    ]
);


