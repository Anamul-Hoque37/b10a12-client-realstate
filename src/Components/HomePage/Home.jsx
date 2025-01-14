import React from 'react';
import Banner from './Banner';
import Advertisement from './Advertisement';
import LatestUser from './LatestUser';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <LatestUser></LatestUser>
        </div>
    );
};

export default Home;