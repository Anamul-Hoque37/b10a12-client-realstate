import React from 'react';
import AdminNavbar from '../Components/AdminDashboard/AdminNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/HomePage/Footer';

const Admin = () => {
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Admin;