import React from 'react';
import SectionTitlee from '../../Component/SectionTitlee';
import { useQueries, useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaRegUserCircle, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Allusers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [], refetch} = useQuery({
        queryKey : ['users'],
        queryFn: async()=>{
            const response = await axiosSecure.get('/users');
    return response.data;
        }
    })
    const handleMakeAdmin =(user)=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0 ){
                refetch()
           
Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${user.name} is an admin Now!`,
  showConfirmButton: false,
  timer: 1500
});
            }
        })
    }
    const handleDeleteuser=(users)=>{
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
                axiosSecure.delete(`/users/${users._id}`).then((res) => {
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
    }
    return (
        <div className='w-full'>
            <SectionTitlee heading={'manage all users'} subHeading={'----How Many??----'}></SectionTitlee>
           <div className='flex justify-evenly my-4'>
           <h2 className='text-3xl font-bold text-black'>All Users</h2>
           <h2 className='text-3xl font-bold text-black'>Total Users: {users.length}</h2>
           </div>

           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr className='text-lg font-bold'>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
                        {
                            users.map((item, ind) => (
                                <tr key={ind}>
                                    <th>{ind + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        {

                                            item.role === 'Admin'? <button className='disable text-lg font-bold text-green-500'>Admin</button> : <button
                                            onClick={() => handleMakeAdmin(item)}
                                            className="btn btn-ghost text-white text-xl"
                                          >
                                             <FaRegUserCircle className="text-orange-600"/>
                                     
                                          </button>
                                        }
                                        
                                        </td> {/* Assuming role is a property */}
                                    <td>
                                        <button
                                                           onClick={() => handleDeleteuser(item)}
                                                           className="btn btn-ghost text-white text-xl"
                                                         >
                                                           <FaTrash className="text-red-500"></FaTrash>
                                                         </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
  </table>
</div>
        </div>
    );
};

export default Allusers;