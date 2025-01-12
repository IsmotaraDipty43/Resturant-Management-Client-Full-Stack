import React from 'react';
import SectionTitlee from '../../../Component/SectionTitlee';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ChceekOutFrom from './ChceekOutFrom';


const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY)
const Payment = () => {

    return (
        <div className='justify-center items-center'>
   <SectionTitlee heading={'Payment'} subHeading={'---Please Payment First---'}></SectionTitlee>
   <div className=' '>
<Elements stripe={stripePromise}>
<ChceekOutFrom>
<ChceekOutFrom></ChceekOutFrom>
</ChceekOutFrom>
</Elements>
   </div>
        </div>
    );
};

export default Payment;