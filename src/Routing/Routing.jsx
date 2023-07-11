import React from 'react'
import {  Routes,Route } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage'
import Productpage from '../pages/Productspage/Productpage'
import Wishlispage from '../pages/Wishlistpage/Wishlispage'; 
import Addtocartpage from '../pages/Addtocartpage/Addtocartpage'; 
import SignIn  from '../components/Signin/Signin'
import { LoginPage } from '../pages/Loginpage/Loginpage';
import { Filterdata } from '../Context/FilterContext';
import { AuthContextProvider } from "../Context/authcontext";

import Mockman from "mockman-js";
const Routing = () => {
  return (

    <Filterdata>
          <AuthContextProvider>
 <Routes>
  <Route path="/" element={<Homepage/>} /> 
  <Route path="/products" element={<Productpage/>} /> 
  <Route path="/wish" element={<Wishlispage/>} /> 
  <Route path="/cart" element={<Addtocartpage/>} /> 
  <Route path="/login" element={<LoginPage/>} /> 
  <Route path="/signin" element={<SignIn/>} /> 
  <Route path="/mockman" element={<Mockman/>} /> 
 </Routes>
 </AuthContextProvider>
 </Filterdata>
 
  )
}

export   {Routing}