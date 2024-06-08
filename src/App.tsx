import React, {FC} from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import {Outlet} from "react-router-dom";

const App: FC = () => {


    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>

    );
}

export default App;