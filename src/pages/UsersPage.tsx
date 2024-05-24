import React from 'react';
import UsersComp from "../components/UsersComp";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <h2>Users home page </h2>

            <UsersComp/>
            <hr/>
            <Outlet/>


        </div>
    );
};

export default UsersPage;