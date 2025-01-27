import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
import { MdOutlineManageHistory, MdOutlinePreview } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';
import { IoBagAddSharp } from 'react-icons/io5';

const Admin = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-64 bg-gradient-to-l from-slate-700 via-fuchsia-700 to-slate-700'>
                <div></div>
                <div className='py-8'>
                    <ul className="menu menu-horizontal md:hidden bg-fuchsia-700 text-xl text-white">
                        <li><NavLink to="/" ><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/admin/profile'><RiAdminLine /> Admin Profile</NavLink></li>
                        <li><NavLink to='/admin/manage'><MdOutlineManageHistory /> Manage Properties</NavLink></li>
                        <li><NavLink to='/admin/manage-review'><MdOutlinePreview /> Manage Reviews</NavLink></li>
                        <li><NavLink to='/admin/manage-user'><FaUsers /> Manage Users</NavLink></li>
                        <li><NavLink to='/admin/advertise-property'><IoBagAddSharp /> Advertise Property</NavLink></li>
                    </ul>
                    <ul className="menu menu-vertical hidden md:block bg-fuchsia-700 text-xl text-white">
                        <li><NavLink to="/" ><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/admin/profile'><RiAdminLine /> Admin Profile</NavLink></li>
                        <li><NavLink to='/admin/manage'><MdOutlineManageHistory /> Manage Properties</NavLink></li>
                        <li><NavLink to='/admin/manage-review'><MdOutlinePreview /> Manage Reviews</NavLink></li>
                        <li><NavLink to='/admin/manage-user'><FaUsers /> Manage Users</NavLink></li>
                        <li><NavLink to='/admin/advertise-property'><IoBagAddSharp /> Advertise Property</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Admin;