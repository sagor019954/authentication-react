import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {

    return (
        <div>
            <nav>
                <Link to='/login'>Loging</Link>
                <Link to=''>Register</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;