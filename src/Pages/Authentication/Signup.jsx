import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import bgimg from '../../assets/others/authentication2.png'
import { Link, Navigate, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {
    const {createUser,      updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
 
    createUser(data.email, data.password)
    .then(result=>{
      const loggeduser = result.user  
      console.log('login:',loggeduser);
      updateUserProfile(data.name, data.photo)
      .then(()=>{
console.log('user login');
reset();
Swal.fire({
  title: "User created sucessfully",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
navigate('/');
      })
       .catch(error=>{
        console.log(error);
       })


     

      
    })
  
  }
    
    const handleReset = () => {
      reset(); // Clears all form inputs
    };

    return (
        <div className="hero  min-h-screen">
          
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="text-center lg:text-left">

      <img src={bgimg} alt="" />

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      
      <form     onSubmit={handleSubmit(onSubmit)}     className="card-body">

      <h1 className="text-5xl font-bold">Sign up now!</h1>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' {...register("name",{ required: true })} placeholder="name" className="input input-bordered" required />
          {errors.name && <span className='text-red-500 mt-2'>This field is required</span>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="url" name='photo' {...register("photo",{ required: true })} placeholder="insert image" className="input input-bordered" required />
          {errors.photo && <span className='text-red-500 mt-2'>This field is required</span>}
        </div> 

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' {...register("email")} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' {...register("password",{ required: true,minLength: 6, maxLength: 20 , 
             pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/
          })} placeholder="password" className="input input-bordered" required />
          {errors.password?.type==='required' && <span className='text-red-500 mt-2'>This field is required</span>}
          {errors.password?.type==='minLength' && <span className='text-red-500 mt-2'>Password must be 6 char</span>}
          {errors.password?.type==='maxLength' && <span className='text-red-500 mt-2'>Password limit is 20 char</span>}
          {errors.password?.type==='pattern' && <span className='text-red-500 mt-2'>Password must be one uppercase one lowercase one digit  and one special character.</span>}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white">Sign Up</button>
          <button type="button" onClick={handleReset} className="btn mt-5 bg-red-500 text-white">Reset</button>
        </div>
        <p className='text-base text-black'><small>Already Have and Account?<Link to='/login'>Login Here</Link></small></p>
      </form>
     
    </div>
  </div>
</div>
    );
};

export default Signup;