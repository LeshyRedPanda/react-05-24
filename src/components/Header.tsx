import React, {FC} from 'react';
import {Link} from "react-router-dom";


const Header:FC = () => {
    return (
        <div>
            <br/>
            <Link to={'/'}>Home page</Link>
            <br/>
            <Link to={'users'}>Users</Link>
            <br/>
            <hr/>
        </div>
    );
};

export default Header;