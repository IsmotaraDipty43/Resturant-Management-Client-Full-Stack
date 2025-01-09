import React from 'react';
import useAuth from '../../Hooks/useAuth';
import admin from '../../assets/others/admin.png'

const AdminHome = () => {
    const {user} = useAuth()
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, Admin! ${user.displayName}</h1>
      <p className="text-lg text-gray-600 mb-6">You have access to the admin dashboard.</p>
      <img 
        src={admin}
        alt="Admin Dashboard" 
        className="w-full max-w-xl rounded-lg shadow-lg"
      />
    </div>
  );
};

export default AdminHome;
