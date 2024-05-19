import React, {FC} from 'react';
import {Link, NavLink} from "react-router-dom";

const Header: FC = () => {

    return (
        <div>
            <br/>
            <Link to="/">home page</Link>
            <br/>
            <br/>
            <NavLink to="users">users page</NavLink> {/* */}
            <hr/>


        </div>
    )
}

export default Header;