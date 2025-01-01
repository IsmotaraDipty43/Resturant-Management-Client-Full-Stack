import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navber from '../Pages/Shared/Navber';

const MainLayout = () => {
    const location = useLocation()
    const noHeaderFoter = location.pathname.includes('/login') ||  location.pathname.includes('/reg')
    return (
        <div>
      {noHeaderFoter ||     <Navber></Navber>}
            <Outlet></Outlet>
       {noHeaderFoter ||      <Footer></Footer>}
        </div>
    );
};

export default MainLayout;