import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaShoppingBag } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
import { MdOutlineManageHistory, MdOutlinePreview } from 'react-icons/md';
import { VscPreview } from 'react-icons/vsc';

const Users = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-64 bg-slate-700'>
                <div className='flex'>
                    <ul className="menu menu-horizontal md:hidden bg-fuchsia-700 text-xl text-white">
                        <li><NavLink to="/" ><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/user/profile'><RiAdminLine /> User Profile</NavLink></li>
                        <li><NavLink to='/user/my-reviews'><MdOutlineManageHistory /> User Reviews</NavLink></li>
                        <li><NavLink to='/user/property'><FaShoppingBag /> Property Bought</NavLink></li>
                        <li><NavLink to='/user/wishlist'><VscPreview /> WishList</NavLink></li>
                        <li><NavLink to='/user/overview'><VscPreview /> Overview</NavLink></li>
                    </ul>
                    <ul className="menu menu-vertical hidden w-full md:block py-16 rounded-2xl bg-fuchsia-700 text-xl text-white">
                    <li><NavLink to="/" ><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/user/profile'><RiAdminLine /> User Profile</NavLink></li>
                        <li><NavLink to='/user/my-reviews'><MdOutlineManageHistory /> User Reviews</NavLink></li>
                        <li><NavLink to='/user/property'><FaShoppingBag /> Property Bought</NavLink></li>
                        <li><NavLink to='/user/wishlist'><VscPreview /> WishList</NavLink></li>
                        <li><NavLink to='/user/overview'><VscPreview /> Overview</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Users;