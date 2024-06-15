import React, {FC} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";

const App: FC = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>

    );
}

export default App;