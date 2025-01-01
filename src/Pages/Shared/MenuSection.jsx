import React from 'react';
// import bgimg from '../../assets/home/chef-service.jpg';

const MenuSection = ({title,description,bgimg}) => {
    return (
       <div 
                   style={{ backgroundImage: `url(${bgimg})` }} 
                   className="justify-center flex h-[500px] bg-cover bg-center items-center relative mt-10 mb-10"
               >
                   <div className="p-10 bg-black text-white bg-opacity-60 flex flex-col justify-center items-center absolute w-10/12 mx-auto ">
                       <h1 className="text-4xl font-bold mb-4">{title}</h1>
                       <p className="text-lg text-center">{description}
                          </p>
                   </div>
               </div>
    );
};

export default MenuSection;