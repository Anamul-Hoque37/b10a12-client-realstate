import React from 'react';
import AgentNavbar from '../Components/AgentDashboard/AgentNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/HomePage/Footer';

const Agent = () => {
    return (
        <div>
            <AgentNavbar></AgentNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Agent;