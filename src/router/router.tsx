import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h2> errororoo</h2>,
        children: [
            {index: true, element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]
    },
])

export default routerConfig;
