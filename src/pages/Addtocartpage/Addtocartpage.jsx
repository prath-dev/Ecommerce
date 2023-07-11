import React from 'react'
import {useAddtoCartContext} from "../../Context/AddtocartContext" ;
import { useWishlistContext } from '../../Context/WishlistContext';
import { Link } from 'react-router-dom';
import {Cartprice} from "../../components/Cartprice/Cartprice"
import { Navabar } from "../../components/Navbar/Navabar";
import "./Addtocartpage.css"
const AddtoCartpage = () => {
  const { myCart, removeFromCart ,increaseQtyOfCard} = useAddtoCartContext();
  const {myWishlist,addToWishlist} =useWishlistContext () ;
  return (
    <>
    <Navabar></Navabar>
      {myCart.length === 0 ? (
        <div className="empty-cart">
        <h1>Empty Cart</h1>
        </div>
       
      ) : (
      
        <div class="container">
  {myCart.map((items) => {
    return (
      <div class="horizontal-card">
    <img className='addtocartimg' src={items.imgSrc} alt={items.title}/>
    <div className="badge">
                 <span onClick={()=> removeFromCart(items._id)} className="material-icons-outlined ">close</span>
      </div>
    <div>
        <h4 class="name">{items.title}</h4>
    <h4 class="price">₹{items.price}</h4>
      <div clas="quantity-info">
       <div><span>Quantity</span>
         <button onClick={() =>
              items.qty > 1 ? increaseQtyOfCard(items._id, "decrement") :null
            }>-</button>
         <span>{items.qty}</span>
          <button onClick={() => increaseQtyOfCard(items._id, "increment")}>+</button></div>
      </div>
      {myWishlist.find((addTowishitem) =>  addTowishitem._id === items._id) ? (
                  <Link to="/wish">
                  <div >
       <button class="wishlist-btn" >MovetoWishlist</button>
    </div>
                      </Link>
   
      ) : (
        <div >
        <button class="wishlist-btn" onClick={() =>  addToWishlist(items)}>AddtoWishlist</button>
     </div>
       
      )}    
    </div>
    <div>
    </div>
  </div>
    )
  })}
<Cartprice></Cartprice>
</div>



      )}
    </>
  );
};


export default AddtoCartpage