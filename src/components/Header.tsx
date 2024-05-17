import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Header: FC = () => {

    return (
        <div>
            <br/>
            <link href="/">home page</link>
            <br/>
            <br/>
            <NavLink href="users">users page</NavLink> {/* */}
            <hr/>


        </div>
    )
}

export default Header;