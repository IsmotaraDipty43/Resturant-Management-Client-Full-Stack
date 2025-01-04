import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const OrderedCard = ({ items }) => {
  const {user} = useAuth()
   const  location = useLocation()
const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()
  const navigate = useNavigate()
  const { name, image, price, recipe, _id} = items;
  const handleAddtoCart =(food)=>{


if(user && user.email){
  //send cartitem
  const cartItem = {
    menuItemid: _id,
    email:user.email,
    name,
    image,
    price

  }
  axiosSecure.post('/carts', cartItem)
  .then(res=>{
    if(res.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} added to your cart`,
        showConfirmButton: false,
        timer: 1500
      });
      refetch()
    }
  })

}
else{
  Swal.fire({
    title: "You are not Logged In?",
    text: "Please login to add to the cart?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, login"
  }).then((result) => {
    if (result.isConfirmed) {
     navigate('/login', {state: {from: location }})
    }
  });
}







  }








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
            <button onClick={ handleAddtoCart}
            className="btn btn-outline text-black border-0 border-b-4 border-yellow-500 uppercase text-lg bg-gray-100">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedCard;
