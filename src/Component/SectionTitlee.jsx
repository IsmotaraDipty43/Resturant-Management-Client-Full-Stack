import React from 'react';

const SectionTitlee =  ({heading,subHeading})  => {
      
   
          return (
              <div>
               <div className="text-center mb-10">
              <p className="text-lg text-red-500 mb-5 ">{subHeading}</p>
              <hr className="lg:w-3/12 md:w-5/12 w-7/12 mx-auto border-2 " />
              <h1 className='text-bold text-3xl p-5 uppercase'>{heading}</h1>
              <hr className="lg:w-3/12 md:w-5/12 w-7/12 mx-auto border-2" />
            </div>
              </div>
   
    );
};

export default SectionTitlee;