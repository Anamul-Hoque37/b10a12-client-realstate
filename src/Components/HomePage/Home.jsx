import React from 'react';
import Banner from './Banner';
import Advertisement from './Advertisement';
import LatestUser from './LatestUser';
import FeaturedProperties from './FeaturedProperties';
import SiteOffice from './SiteOffice';
import About from './About';
import MeetAgent from './MeetAgent';
import OursPartner from './OursPartner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Advertisement></Advertisement>
            <LatestUser></LatestUser>
            <FeaturedProperties></FeaturedProperties>
            <OursPartner></OursPartner>
            <MeetAgent></MeetAgent>
            <SiteOffice></SiteOffice>
        </div>
    );
};

export default Home;