import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Login Page</Link></li>
                <li><Link to={'cars'}>Cars Page</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;