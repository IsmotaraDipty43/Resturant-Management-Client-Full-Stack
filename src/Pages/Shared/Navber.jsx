import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? 'text-red-500 !text-white' : 'text-white'} focus:text-white visited:text-white`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `${isActive ? 'text-red-500 !text-white' : 'text-white'} focus:text-white visited:text-white`
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/orderfood/salad"
          className={({ isActive }) =>
            `${isActive ? 'text-red-500 !text-white' : 'text-white'} focus:text-white visited:text-white`
          }
        >
          Order Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? 'text-red-500 !text-white' : 'text-white'} focus:text-white visited:text-white`
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink
            to="/dashbroad/adminHome"
            className={({ isActive }) =>
              `${isActive ? 'text-red-500 !text-white' : 'text-white'} focus:text-white visited:text-white`
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink
            to="/dashbroad/userHome"
            className={({ isActive }) =>
              `${isActive ? 'text-red-500 !text-white' : 'text-white'} focus:text-white visited:text-white`
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink
            to="dashbroad/cart"
            className="flex justify-center items-center text-lg gap-2 text-white focus:text-white visited:text-white"
          >
            <FaShoppingCart />
            <div className="badge badge-secondary">
              +{cart?.length || 0}
            </div>
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-xl text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-white bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <a className="btn btn-ghost text-xl text-white">BISTROBOSS</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-bold text-white">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          {user ? (
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navber;
