import React from 'react';
import UserNavbar from '../Components/UserDashboard/UserNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/HomePage/Footer';

const User = () => {
    return (
        <div>
            <UserNavbar></UserNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default User;