import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart'
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const [error,setError] = useState('')
    const [client_secret, setClientSecret] = useState();
    const stripe=useStripe()
    const elements = useElements();
    const axiosSecure= useAxiosSecure()
   const [cart,refetch] = useCart()
   const {user} = useAuth()
   const naviagate= useNavigate()
   const [transactionid, settransationId]= useState('')
   const Totalprice = cart.reduce((total,item)=>total+item.price,0)

useEffect(()=>{
       if(Totalprice>0){
        axiosSecure.post('/create-payment-intent', {price: Totalprice})
       .then(res=>{
        console.log(res.data.client_secret);
        setClientSecret(res.data.client_secret); // Corrected typo here
       })
       }
},[axiosSecure, Totalprice])






  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe || !elements){
        return;
    }

    const card = elements.getElement(CardElement)
 if(card === null){
    return;
 }

 const{error, paymentMethod} = await stripe.createPaymentMethod({
    type:'card',
    card
 })

 if(error){
    console.log('Payment error', error);
    setError(error.message)
 }else{
    console.log('Payment method', paymentMethod);
    setError('')
 }

//confirme payment

const {paymentIntent, err}=await stripe.confirmCardPayment(client_secret,{
  payment_method:{
    card:card,
    billing_details:{
      email:user?.email || 'anonymous user',
      name:user?.displayName || 'anonymous user'
    }
  }
})
if(err){
  console.log('confirme eror', err);
}else{
  console.log(paymentIntent, 'payment intend');
  if(paymentIntent.status='succeeded'){
    settransationId(paymentIntent.id)
   


    const payment={
      email: user.email,
      price:Totalprice,
      transactionId: paymentIntent.id,
      date: new Date(),
      cartIds: cart.map(item=>item._id),
      menuItemIds:cart.map(item=>item.menuItemid),
      status:'pending'
    }
  const res= await  axiosSecure.post('/payments', payment)
 console.log(res.data);
 refetch()
 if(res.data.Paymentresult.insertedId){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `Payment sucessfull.Your transtaion id is ${paymentIntent.id}`,
    showConfirmButton: false,
    timer: 1500
  });
  naviagate('/dashbroad/paymentHistory')
 }
  }
}



  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Roboto", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button
        type="submit"     disabled={!stripe || !client_secret} // Corrected typo here
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Pay Now
      </button>
      <p className='text-red-500'>{error}</p>
    
    </form>
  );
};

export default CheckoutForm;
