import React from 'react';
import Acheivers from './Acheivers';
import Become from './Become';
import Corousel from './Corousel';
import Discover from './Discover';
import Enroll from './Enroll';
import Latestjobs from './Latestjobs';
import Ourclients from './Ourclients';
import Ourtrainers from './Ourtrainers';
import Recentadditions from './Recentadditions';
import Review from './Review';
import Trendingcourses from './Trendingcourses';
import Whyweare from './whyweare';

const HomeComp = () => {
    return (
    <div>
        <Corousel/>
    <Become/>
    <Trendingcourses/>
    <Recentadditions/>
    <Discover/>
     {/* <Counter/> */}
<Review/>
<Enroll/>
<Acheivers/>
<Whyweare/>
<Ourtrainers/>
<Latestjobs/>
<Ourclients/>
    </div>
    )}


export default HomeComp;