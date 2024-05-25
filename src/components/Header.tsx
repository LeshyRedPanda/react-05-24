import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Header:FC = () => {
    return(
        <div className={'header'}>
            <br/>
            <br/>
            <Link className={'header-link'} to={'/'}>Dogs Home Page</Link>
            <br/><br/>
            <Link className={'header-link'} to={'users'}>Users</Link>
        </div>
    )
}

export default Header;