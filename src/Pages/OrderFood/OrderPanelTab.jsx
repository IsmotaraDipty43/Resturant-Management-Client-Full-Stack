import React from 'react';
import OrderedCard from './OrderedCard';

const OrderPanelTab = ({items}) => {
    return (
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-10 mt-10 mb-10'>
         {
             items.map(item=><OrderedCard key={item._id} items={item}></OrderedCard>)
           }
         </div>
    );
};

export default OrderPanelTab;