import React from 'react';
import SectionTitlee from '../../Component/SectionTitlee';
import './Features.css';
import featuredImg from '../../assets/home/featured.jpg'
const Features = () => {
    return (
        <div className='featured-item bg-fixed p-10 text-white mt-10 mb-10'>
            <SectionTitlee subHeading={'---Check it out---'} heading={'Featured Item'} />
            <div className='md:flex gap-5 justify-center items-center pb-20 pt-12 bg-slate-500 bg-opacity-60 text-white p-5'>
                <div>
                    <img src={featuredImg} className="rounded-lg" alt="" />
                </div>
                <div className='space-y-2 p-5'>
                    <p>Aug 20, 2025</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>A special treat from our menu, crafted to satisfy your cravings with bold and delicious flavors. Indulge in our chef’s special creation, a masterpiece of taste and presentation, blending fresh ingredients with bold, unforgettable flavors. A dish that promises to delight your senses.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 border-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Features;


