import React, { useEffect, useState } from 'react';
import SectionTitlee from '../../Component/SectionTitlee';
import Card from '../Shared/Card';
import useMenu from '../../Hooks/useMenu';


const Popularmenu = () => {
   

    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === 'popular');


    return (
        <section>
            <SectionTitlee
                subHeading="---Check it out---"
                heading="FROM OUR MENU"
            />
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-5"> {/* Added styling for the grid */}
                {popular.map(item => (
                    <Card key={item._id} item={item} />
                ))}
            </div>
         <div className='flex justify-center items-center'>
         <button className='btn btn-outline text-black border-0 border-b-4 border-black uppercase text-lg'>View full Menu</button>
         </div>
        </section>
    );
};

export default Popularmenu;
