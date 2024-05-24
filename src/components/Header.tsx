import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Header:FC = () => {
    return(
        <div>
            <br/>
            <br/>
            <Link to={'/'}>HoMe PaGe</Link>
            <br/>
            <Link to={'users'}>Users</Link>



        </div>
    )
}

export default Header;