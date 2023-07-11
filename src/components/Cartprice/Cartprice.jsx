import React from 'react'
import {useAddtoCartContext} from "../../Context/AddtocartContext"
import "./Cart.css"
const Cartprice = () => {
    const { myCart } = useAddtoCartContext();

    const totalPriceByDiscount = myCart.reduce(
      (acu, value) => {
        return {
          ...acu,
          price: acu.price + parseInt(value.discountPriceCalculation) * value.qty,
        };
      },
      { price: 0 }
    );
  
    const totalMRP = myCart.reduce(
      (acu, value) => {
        return {
          ...acu,
          price: acu.price + Number(value.mrpCalculation) * value.qty,
        };
      },
      { price: 0 }
    );
  
    const discountOnMRP = totalMRP.price - totalPriceByDiscount.price;
  return (
<div class="pricecard-container">
<div class="price-container">
  <h3 class="header-textcard">PRICE DETAILS</h3>
  <div>
    <div class="price">
      <span>Price</span>
     <span>{totalMRP.price}</span>
    </div>
 
    <div class="price">
      <span>Discount</span>
     <span>{discountOnMRP}</span>
    </div>
     <div class="price">
      <span>Delivery Charge</span>
     <span>Free</span>
    </div>
       <div class="price total-amt">
      <span>Total Amount</span>
     <span>{totalPriceByDiscount.price}</span>
    </div>
    <p>You will save Rs. 150 on this order</p>
    <div class="place-order-btn">
    <button><h3 class="order-text">PLACE ORDER</h3></button>
    </div>
  </div>
  </div>
</div>
  )
}

export {Cartprice}
