import React from 'react';

const OrderedCard = ({ items }) => {
  const { name, image, price, recipe } = items;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-0">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p className="text-lg bg-slate-900 right-0 text-white mr-4 mt-4 absolute px-4 font-semibold">Price: ${price}</p>
        <div className="card-body text-center flex flex-col items-center">
          <h2 className="card-title text-lg text-gray-800 font-bold">{name}</h2>
          <p className="text-lg text-gray-600 font-semibold">{recipe}</p>
     
          <div className="card-actions">
            <button className="btn btn-outline text-black border-0 border-b-4 border-yellow-500 uppercase text-lg bg-gray-100">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedCard;
