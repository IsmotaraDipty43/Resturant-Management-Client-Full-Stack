import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { GoCodeReview } from 'react-icons/go';
import { MdRateReview, MdRestaurantMenu } from 'react-icons/md';
import { IoAddCircleSharp, IoHome } from 'react-icons/io5';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { GrUnorderedList } from 'react-icons/gr';
const Dashbroad = () => {
    return (
        <div className="flex gap-10 flex-col md:flex-row">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 gap-5 ">
                <li className="text-xl font-semibold   flex rounded-lg   gap-2">
  <NavLink to="/dashbroad/userHome" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
    <FaHome /> User Home
  </NavLink>
</li>

<li className="text-xl font-semibold  flex rounded-lg  gap-2">
  <NavLink to="/dashbroad/reservation" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500 ' : 'text-black'} flex items-center gap-2`}>
    <FaCalendar /> Reservation
  </NavLink>
</li>

<li className="text-xl font-semibold  flex rounded-lg  gap-2">
  <NavLink to="/dashbroad/review" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500 ' : 'text-black'} flex items-center gap-2`}>
    <MdRateReview /> Add Review
  </NavLink>
</li>

<li className="text-xl font-semibold  flex rounded-lg  gap-2">
  <NavLink to="/dashbroad/bboking" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500 ' : 'text-black'} flex items-center gap-2`}>
    <IoAddCircleSharp /> My Booking
  </NavLink>
</li>

<li className="text-xl font-semibold  flex rounded-lg  gap-2">
  <NavLink to="/dashbroad/cart" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500 ' : 'text-black'} flex items-center gap-2`}>
    <FaShoppingCart /> My Cart
  </NavLink>
</li>
<div className='divider text-black'></div>
<li className="text-xl font-semibold   flex rounded-lg  gap-2">
  <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
  <IoHome /> Home
  </NavLink>
</li>

<li className="text-xl font-semibold   flex rounded-lg  gap-2">
  <NavLink to="/menu" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
  <MdRestaurantMenu /> Our Menu
  </NavLink>
</li>
<li className="text-xl font-semibold   flex rounded-lg  gap-2">
  <NavLink to="/orderfood/salad" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
  <GrUnorderedList /> Order Food
  </NavLink>
</li>
<li className="text-xl font-semibold   flex rounded-lg  gap-2">
  <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-white bg-purple-500' : 'text-black'} flex items-center gap-2`}>
  <BiSolidPhoneCall /> Contact Us
  </NavLink>
</li>

                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashbroad;