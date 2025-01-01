import React from 'react';
import Bannerr from './Bannerr';
import Banner2 from './Banner2';
import Popularmenu from './Popularmenu';
import Features from './Features';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Bannerr3 from './Bannerr3';
import { Helmet } from 'react-helmet-async';
import OurMenu from '../MenuLayout/OurMenu';

const Home = () => {
    return (
        <div>
            <Helmet><title>BistroBoss||Home</title></Helmet>
            <Bannerr></Bannerr>
            <Banner2></Banner2>
            <Popularmenu></Popularmenu>
            <Bannerr3></Bannerr3>
            <Contact></Contact>
            <Features></Features>
         
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;