import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import image from '../../../assets/others/admin.png'
const UserHome = () => {
    const { user } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <h1 className="text-2xl font-bold text-gray-800">
                    Welcome, {user?.displayName || 'User'}!
                </h1>
                <p className="text-gray-600 mt-2">We're glad to have you here.</p>
                <img 
                    src={user?.photoURL || 'https://via.placeholder.com/150'} 
                    alt="User Avatar" 
                    className="w-32 h-32 rounded-full mt-4 shadow-lg"
                />
            </div>
            <div className='mt-10'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default UserHome;
