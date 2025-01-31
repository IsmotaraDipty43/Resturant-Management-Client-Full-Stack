import React from 'react';
import SectionTitlee from '../../Component/SectionTitlee';
import { useForm } from "react-hook-form";
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItem = () => {
  const { register, handleSubmit,reset } = useForm();
  const axiospublic = useAxiosPublic()
  const axiossecure = useAxiosSecure()
  const onSubmit = async (data) =>{
    const imageFile = {image: data.image[0]}
    
           const res = await axiospublic.post(image_hosting_api, imageFile, {
            headers: {
              'content-type': 'multipart/form-data',
            }
          
           })
           if(res.data.success){
            const menuItem ={
              name:data.name,
              category:data.category,
              price: parseFloat(data.price),
              recipe:data.recipe,
              image:res.data.data.display_url
            }
          const menuresponse = await axiossecure.post('/menu', menuItem)
      console.log(menuresponse.data);
      if(menuresponse.data.insertedId){
        //show popup
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:`${data.name} is added to the menu sucessfully`,
          showConfirmButton: false,
          timer: 1500
        });
      }


           }
           console.log(res.data);
  }

  return (
    <div className='w-full'>
      <SectionTitlee heading={'ADD ITEMS'} subHeading={"----What's New----"}></SectionTitlee>
      <div className="w-full p-5">
        <div className="bg-gray-100 mt-10 mb-10 p-8 rounded-lg shadow-lg">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div>
              <label  className="block text-gray-700 font-medium mb-2">Recipe Name*</label>
              <input
                name="name"
                {...register("name", {required: true})}
                placeholder="Enter item name"
              required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
{/* Category and Recipe Name Section */}
<div className="flex flex-col md:flex-row gap-5">
  {/* Category Dropdown */}
  <div className="flex-1">
    <label  className="block text-gray-700 font-medium mb-2">
      Category*
    </label>
    <select  defaultValue='default'
      name="category"
      {...register("category",{required: true})} required
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option disabled value ='default'>Select a Category</option>
      <option value="salad">Salad</option>
      <option value="pizza">Pizza</option>
      <option value="soup">Soup</option>
      <option value="dessert">Dessert</option>
      <option value="drinks">Drinks</option>
    </select>
  </div>

  {/* Recipe Name Field */}
  <div className="flex-1">
    <label className="block text-gray-700 font-medium mb-2">
      Price*
    </label>
    <input
      name="price"
      {...register("price",{required: true})} required
      placeholder="Enter item price"
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
 

  

  
</div>
 {/* Recipe Name Field */}
 <div className="flex-1">
   <label className="form-control">
  <div className="label">
    <span className="label-text">Recipe Details</span>
   
  </div>
  <textarea className="textarea textarea-bordered h-24"   name="recipe"
      {...register("recipe",{required: true})}   required       placeholder="Details"></textarea>

</label>
  </div>

<div>
<input type="file" {...register('image',{required: true})}   required         className="file-input file-input-bordered  w-full max-w-xs" />
</div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-gray-900 text-white font-semibold py-3 rounded-lg ">
              Add Item <FaUtensils></FaUtensils>
            </button>
          </form>
        </div>
     
     
     
     
     
     
      </div>
    </div>
  );
};


export default AddItem;
