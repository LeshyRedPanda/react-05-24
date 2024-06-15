import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={''} className={'headerLinks'}>Home page</Link></li>
                <li><Link to={'users'} className={'headerLinks'}>Users page</Link></li>
                <li><Link to={'posts'} className={'headerLinks'}>Posts page</Link></li>
                <li><Link to={'comments'} className={'headerLinks'}>Comments page</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;