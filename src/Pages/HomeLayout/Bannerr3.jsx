import React from 'react';
import bgimg from '../../assets/home/chef-service.jpg';

const Bannerr3 = () => {
    return (
        <div 
            style={{ backgroundImage: `url(${bgimg})` }} 
            className="justify-center flex h-[500px] bg-cover bg-center items-center relative mt-10 mb-10"
        >
            <div className="p-10 bg-white text-black flex flex-col justify-center items-center absolute w-10/12 mx-auto ">
                <h1 className="text-4xl font-bold mb-4">Bistro Boss</h1>
                <p className="text-lg text-center">
                    Experience the taste of excellence with our carefully curated menu. At Bistro Boss, we take pride in serving mouthwatering dishes crafted from the freshest ingredients. Whether you're here for a quick bite or a fine dining experience, let us make every moment unforgettable!
                </p>
            </div>
        </div>
    );
};

export default Bannerr3;
