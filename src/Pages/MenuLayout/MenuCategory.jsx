import React from 'react';
import Card from '../Shared/Card';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,category}) => {
    console.log(items);

    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-5"> {/* Added styling for the grid */}
                {items.map(item => (
                    <Card key={item._id} item={item} />
                ))}
            </div>

            <div className='flex justify-center items-center'>
           <Link to={`/orderfood/${category}`}> <button className='btn btn-outline text-black border-0 border-b-4 border-black uppercase text-lg'>ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;