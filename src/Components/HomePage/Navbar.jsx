import React, { useContext, useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../../Authentication/AuthProvider';
import { FaRegCircleUser } from "react-icons/fa6";
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { AuthContext } from '../../Authentication/AuthProvider';

import img from '../../assets/skyscrapper.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const userEmail = user?.email;

    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }, []);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };

    const Links = <>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to='/all-properties'>All Properties</NavLink></li>
        {/* {
            user && <> <li><NavLink to='/add'>Add Tutorial</NavLink></li> </>
        } */}
    </>

    return (
        <div className='bg-green-300 sticky top-0 z-50'>
            <div className="navbar flex justify-between bg-gradient-to-l from-slate-700 via-fuchsia-700 to-slate-700 text-white">
                <div className="flex">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-green-400 rounded-box z-10 mt-3 w-48 p-2 shadow">
                            {
                                Links
                            }
                        </ul>
                    </div>
                    <img className='w-14 h-14' src={img} alt="" />
                    <Zoom>
                        <a className="btn btn-ghost text-2xl">Dreamnest</a>
                    </Zoom>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="flex gap-1">
                    <div className="flex-none">
                        <label className="swap swap-rotate">
                            {/* This checkbox toggles the dark mode */}
                            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                            {/* Light mode and Dark Mode icon */}
                            <div className='text-5xl items-center text-center md:pr-4'>
                                {isDarkMode ? <CiLight /> : <MdDarkMode />}
                            </div>
                        </label>
                    </div>
                    <div className='flex'>
                        <div className='rounded-lg'>
                            {user && user?.email ? (<button onClick={logOut} className='btn'>LogOut</button>) : (<div className='flex gap-1'>
                                <Link to="/login" className='btn'>Login</Link>
                                <Link to="/registration" className='btn'>Registration</Link>
                            </div>)}
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {user && user?.email ? (<div><img className='w-14 h-14 rounded-full relative' src={user.photoURL} alt="" /></div>) : (<div className='text-[40px]'><FaRegCircleUser /></div>
                                    )}
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                                <p>{user?.displayName}</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;