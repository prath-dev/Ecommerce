import React from 'react'
import "./Wishlist.css"
import { useAddtoCartContext } from '../../Context/AddtocartContext';
import {useWishlistContext} from "../../Context/WishlistContext.js"
import { Navabar } from "../../components/Navbar/Navabar";
import { Link } from 'react-router-dom';
const Wishlispage = () => {
  const { myWishlist, removeFromWishlist} = useWishlistContext();
  const { myCart ,addToCart} = useAddtoCartContext();
  return (
    <>
    <Navabar></Navabar>
  
      {myWishlist.length === 0 ? (
        <div className="empty-cart">
        <h1>Empty Cart</h1>
        </div>
      ) : (
        <>
          <div className="wishlist-text">My Wishlist</div>
          <div className="wishlist-container">
            { myWishlist.map((items) => {
            
              return (
                <div className='cards'>
                <div>
                <img class="card-img" src={items.imgSrc} alt={items.title}/>
              </div>
              <div className="like-badge">
         <span onClick={()=> removeFromWishlist(items._id)} className="material-icons-outlined ">favorite</span>
</div>
              <div class="info">
            <p class="price-label">Rs. {items.price}</p>
            <span>{items.title}</span> 
            </div>
            <div class="card-menu">
            <div class="rating">⭐ {items.rating}</div>
              <span>{items.price}</span>
              </div> 
              {myCart.find((addToCartitem) =>  addToCartitem._id === items._id) ? (
                  <Link to="/cart">
                  <div class="card-btn" >  
                       <span class="btn1cart">Go to Cart</span>
                  </div>
                      </Link>
   
      ) : (
        <div class="card-btn">
        <span class="btn1"onClick={() => addToCart(items)}>Add To Cart</span>
   </div>
      )}
    
              </div>
             
              )
            })}
          </div>
        </>
      )}
    </>
  );
};



export default Wishlispage