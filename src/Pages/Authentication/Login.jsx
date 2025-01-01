import React from 'react';
import loginimg from '../../assets/others/authentication1.png'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target 
        const email = form.email.value;
        const password= form.password.value;
        console.log(email,password);
    }


    return (
        <div className=''>
          <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row p-10">
    <div className="text-center md:w-1/2 justify-center items-center flex lg:text-left">
    <img src={loginimg}  alt="" />
      
    </div>
 <div>
 <h1 className='text-3xl font-bold text-black text-center'>Login Now</h1>
 <div className=" card w-full  ">

      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
     
          <input className="btn bg-yellow-600 text-white" type="submit" value='Sign In' />
        </div>
      </form>
    </div>
 </div>
  </div>
</div>
        </div>
    );
};

export default Login;