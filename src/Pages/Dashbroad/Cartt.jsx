import React from 'react';
import SectionTitlee from '../../Component/SectionTitlee';
import useCart from '../../Hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cartt = () => {
  const [cart = [], refetch] = useCart(); // Provide a default empty array for `cart`

  const secureAxios = useAxiosSecure();

  // Ensure `cart` is an array before using `reduce`
  const totalPrice = cart?.reduce((total, item) => {
    return total + (item.price || 0); // Fallback to 0 if item.price is undefined or null
  }, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };
 
  return (
    <div className="mt-10 w-full mb-10">
      <SectionTitlee
        heading={'wanna add more?'}
        subHeading={'----My Cart----'}
      ></SectionTitlee>

      <div className="mt-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">
          Total Orders: {cart?.length || 0}
        </h1>
        <h1 className="text-2xl font-bold text-black">
          Total Price: {totalPrice}
        </h1>
{
  cart.length?       <Link to='/dashbroad/payment'> <button  className="btn bg-purple-500 text-2xl text-white">Pay</button></Link> :  <button disabled  className="btn bg-purple-500 text-2xl text-white">Pay</button>
}
      </div>

      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-xl font-bold text-black">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-black text-xl">
            
            {cart.map((item, ind) => (
              <tr key={item._id}>
                <th>{ind + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost text-white text-xl"
                  >
                    <FaTrash className="text-red-500"></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cartt;
