import React from 'react';
import Banner from './Banner';
import Advertisement from './Advertisement';
import LatestUser from './LatestUser';
import FeaturedProperties from './FeaturedProperties';
import SiteOffice from './SiteOffice';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <LatestUser></LatestUser>
            <FeaturedProperties></FeaturedProperties>
            <SiteOffice></SiteOffice>
        </div>
    );
};

export default Home;