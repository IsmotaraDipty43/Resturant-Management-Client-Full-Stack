import React from 'react';
import { Parallax } from 'react-parallax';
const Cover = ({img,title,description}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
      <div
  className="hero h-[700px]"
 >
  <div className="hero-overlay "></div>
  <div className="hero-content text-white text-center ">
    <div className="w-9/12 mx-auto bg-black bg-opacity-60 p-10 ">
      <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
      <p className="mb-5 text-lg">
        {description}
      </p>
      
    </div>
  </div>
</div>
    </Parallax>
        
    );
};

export default Cover;