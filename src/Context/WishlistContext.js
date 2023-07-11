import React from 'react'
import { createContext, useContext, useState,useEffect } from "react";
import axios from "axios";

const WishlistContext = createContext();

const encodedToken= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY5YTFkNC03NmNhLTQzNTgtYjJiYi0xNjJiODY4OWNhNDMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.1JtJKtvqXZ-46VifI24s_1agwv38Lq2DE2DbSTXcRRw";  
const WishlistContextProvider = ({ children }) => {


  const [myWishlist, setMyWishlist] = useState([]);

  const seeWishlist  = async () => {
    console.log('this is wishlist ');
    try {
      const response = await axios.get(
        "/api/user/wishlist",
        {
          headers: {
            authorization: encodedToken
          },
        
        }

      );

      console.log({response});
    } catch (error) {
      console.log(error);
    }
  };


  const addToWishlist = async (product) => {
    console.log({product});
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product }, {headers:{authorization:encodedToken}},
      );
      setMyWishlist(response.data.wishlist);
      console.log(response  )
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    seeWishlist()
  },[])

  const removeFromWishlist = async (productID) => {
    console.log(productID)
    try {
      const response = await axios.delete(
        `/api/user/wishlist/${productID}`,
        {headers:{authorization:encodedToken}} ,
      );
      console.log(response)
      setMyWishlist(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <WishlistContext.Provider
      value={{ myWishlist, setMyWishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
  
};

const useWishlistContext = () => useContext(WishlistContext);

export { useWishlistContext, WishlistContextProvider };