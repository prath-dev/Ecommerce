import React from 'react'
import { createContext, useContext, useState,useEffect } from "react";

import axios from "axios";

const AddtoCartContext = createContext();

const AddtoCartContextProvider = ({ children }) => {
  const encodedToken= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY5YTFkNC03NmNhLTQzNTgtYjJiYi0xNjJiODY4OWNhNDMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.1JtJKtvqXZ-46VifI24s_1agwv38Lq2DE2DbSTXcRRw";

  const [myCart, setMyCart] = useState([]);

  const seeCart  = async () => {
    console.log('this is wishlist ');
    try {
      const response = await axios.get(
        "/api/user/cart",
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


  const addToCart = async (product) => {
    console.log({product});
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product }, {headers:{authorization:encodedToken}},
      );
      setMyCart(response.data.cart);
      console.log(response  )
    } catch (error) {
      console.log(error);
    }
  };


  const removeFromCart = async (productID) => {
    console.log(productID)
    try {
      const response = await axios.delete(
        `/api/user/cart/${productID}`,
        {headers:{authorization:encodedToken}} ,
      );
      console.log(response)
      setMyCart(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };
  const increaseQtyOfCard = async (productID, addOrRemove) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productID}`,
        {
          action: {
            type: addOrRemove,
          },
        },
        {headers:{authorization:encodedToken}} ,
      );
      setMyCart(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddtoCartContext.Provider
      value={{ myCart, setMyCart, addToCart, removeFromCart ,increaseQtyOfCard}}
    >
      {children}
    </AddtoCartContext.Provider>
  );
  
};

const useAddtoCartContext = () => useContext(AddtoCartContext);

export { useAddtoCartContext, AddtoCartContextProvider };