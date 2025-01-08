import React, { useContext, useEffect, useRef, useState } from 'react';
import loginimg from '../../assets/others/authentication2.png';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Sociallogin from '../../Component/Sociallogin';

const Login = () => {
  const navigate = useNavigate();
  // const  location = useLocation()
  //  const from = location.state?.from?.pathname || '/'



  const { signIn } = useContext(AuthContext);
  // const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6); // Initialize captcha with 6 characters
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
  .then((result) => {
    const user = result.user;
    console.log(user);
    Swal.fire({
      title: "User Login Successfully Done",
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
    navigate(from, {replace:true});
   
  })
  .catch((error) => {
    console.error('Sign-in failed:', error);
  });

  };

  const handleValidateCaptcha = () => {
    const userCaptchaValue = document.querySelector('[name="Captcha"]').value;
  
    if (validateCaptcha(userCaptchaValue)) {
      setDisable(false); // Enable the button if captcha is valid
    } else {
      setDisable(true); // Keep it disabled if captcha is invalid
      alert('Captcha validation failed. Please try again.');
    }
  };

  return (
    <div className="hero min-h-screen bg-gray-100">
      <div className="hero-content flex-col lg:flex-row p-16 lg:p-20 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src={loginimg} alt="Login Illustration" className="w-full max-w-md" />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-black text-center mb-6">Login Now</h1>
          <div className="card w-full">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
  
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="Captcha"
                  placeholder="Type the captcha here"
                  className="input input-bordered w-full"
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline mt-3 btn-sm"
                  onClick={handleValidateCaptcha} // Updated to onClick
                >
                  Validate
                </button>
              </div>
  
              <div className="form-control mt-6">
                <input
                  className="btn bg-yellow-600 text-white w-full"
                  type="submit"
                  disabled={disable}
                  value="Sign In"
                />
              </div>
            </form>
            <p className="text-center mt-4">
              <small>
                New Here?
                <Link className="text-yellow-700 font-bold" to="/reg">
                  {' '}
                  Create a New Account
                </Link>
              </small>
            </p>
            <Sociallogin></Sociallogin>
          </div>
      
        </div>

      </div>
    </div>
  );
};

export default Login;
