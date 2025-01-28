import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiAdminLine } from 'react-icons/ri';
import { MdOutlineManageHistory, MdOutlinePreview } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';
import { IoBagAddSharp } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';

const Agent = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='w-full mx-auto md:w-64 bg-slate-700'>
                <div className='md:py-8 items-center text-center justify-center'>
                    <ul className="menu menu-horizontal md:hidden bg-fuchsia-700 text-xl text-white">
                        <li><NavLink to="/" ><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/agent/profile'><RiAdminLine /> Agent Profile</NavLink></li>
                        <li><NavLink to='/agent/add-property'><MdOutlineManageHistory /> Add Property</NavLink></li>
                        <li><NavLink to='/agent/added-property'><MdOutlinePreview /> My Added Properties</NavLink></li>
                        <li><NavLink to='/agent/sold-property'><FaUsers /> My Sold Properties</NavLink></li>
                        <li><NavLink to='/agent/offer'><IoBagAddSharp /> Offered Properties</NavLink></li>
                    </ul>
                    <ul className="menu menu-vertical w-full mx-auto hidden py-16 rounded-2xl justify-center text-center items-center md:block bg-fuchsia-700 text-xl text-white">
                        <li><NavLink to="/" ><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to='/agent/profile'><RiAdminLine /> Agent Profile</NavLink></li>
                        <li><NavLink to='/agent/add-property'><MdOutlineManageHistory /> Add Property</NavLink></li>
                        <li><NavLink to='/agent/added-property'><MdOutlinePreview /> My Added Properties</NavLink></li>
                        <li><NavLink to='/agent/sold-property'><FaUsers /> My Sold Properties</NavLink></li>
                        <li><NavLink to='/agent/offer'><IoBagAddSharp /> Offered Properties</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Agent;