import React from 'react';

import {
  createBrowserRouter,
} from "react-router-dom";
import Home from '../Pages/HomeLayout/Home';
import MainLayout from '../Layout/MainLayout';
import OurMenu from '../Pages/MenuLayout/OurMenu';
import Orderfood from '../Pages/OrderFood/Orderfood';
import Login from '../Pages/Authentication/Login';
import Signup from '../Pages/Authentication/Signup';
import Private from './Private';
import Dashbroad from '../Pages/Dashbroad/Dashbroad';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
   {
    path:'/',
    element:<Home></Home>
   },
   {
    path:'/menu',
    element:<OurMenu></OurMenu>
   },
   {
    path:'/orderfood/:category',
    element:<Orderfood></Orderfood>
   },
   {
    path:'/login',
    element:<Login></Login>
   },
   {
    path:'/reg',
    element:<Signup></Signup>
   },
   {
    path:'/dashbroad',
    element:<Private><Dashbroad></Dashbroad></Private>
   }
      ]
    },
  ]);




export default router;