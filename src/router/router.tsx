import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../leyout/MainLayout";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";

const routerConfig = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement: <h3> we have a problem </h3>,
        children:[
            {index:true,element:<AuthPage/>},
            {path:'cars',element:<CarsPage/>}
        ]
    }

]);

export default routerConfig;