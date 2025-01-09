import React from 'react';
import SectionTitlee from '../../../Component/SectionTitlee';
import useMenu from '../../../Hooks/useMenu';
import { MdDeleteForever, MdOutlineSystemUpdateAlt } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Manageitem = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handledeleteItem = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/menu/user/delete/${item._id}`);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Item deleted successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    } else {
                        console.error("Failed to delete item:", res.data); // Log the actual response
                        Swal.fire("Error", "Failed to delete the item", "error");
                    }
                } catch (error) {
                    console.error("Error during deletion:", error); // Log error details
                    Swal.fire("Error", error.message, "error");
                }
                
            }
        });
    };



    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <SectionTitlee heading={'Manages All Item'} subHeading={'----Hurry Up----'} />

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                   <Link to={`/dashbroad/update/${item._id}`}> <button
                                        className="btn btn-ghost btn-xs"
                                  
                                    >
                                        <MdOutlineSystemUpdateAlt className="text-lg text-green-500" />
                                    </button></Link>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-ghost btn-xs"
                                        onClick={() => handledeleteItem(item)}
                                    >
                                        <MdDeleteForever className="text-lg text-red-500" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manageitem;
