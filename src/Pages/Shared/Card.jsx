import React from 'react';

const Card = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex gap-5 p-5 mb-5'>
      <img 
  style={{ borderRadius: '0 200px 200px 200px' }} 
  src={image} 
  alt={name} 
  className="w-[100px]" 
/>

            <div>
                <h3 className='uppercase text-lg font-semibold'>{name}..............</h3>
                <p className='text-base'>{recipe}</p>
            </div>
            <p className='text-red-500 text-lg'>{price}</p>
        </div>
    );
};

export default Card;
