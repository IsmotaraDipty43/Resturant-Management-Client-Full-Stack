import React, { useContext, useEffect, useRef, useState } from 'react';
import loginimg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signin} = useContext(AuthContext)
    const captchref = useRef(null)
    const [disable, setdisable] = useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target 
        const email = form.email.value;
        const password= form.password.value;
        console.log(email,password);
        signin(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);

    })
    }

const handleValidateCaptcha =(e)=>{
    e.preventDefault();
    const user_captcha_value = captchref.current.value;
  

    if (validateCaptcha(user_captcha_value)==true) {
  setdisable(false)
    }

    else {
      setdisable(true)
    }

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

        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" name='Captcha'    ref={captchref}        placeholder="Type the captcha here" className="input input-bordered" required />
          <button className="btn btn-outline mt-3 btn-xs" onClick={handleValidateCaptcha}>Validate</button>
        </div>


        <div className="form-control mt-6">
     
          <input className="btn bg-yellow-600 text-white" type="submit" disabled={disable} value='Sign In' />
        </div>
      </form>
    <p className='text-center'><small >New Here?<Link className='text-yellow-700 font-bold' to='/reg'> Create a New Account</Link></small></p>
    </div>
 </div>
  </div>
</div>
        </div>
    );
};

export default Login;