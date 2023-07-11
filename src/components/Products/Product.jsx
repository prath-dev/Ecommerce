import React, { useEffect,useState } from 'react'
import "./Product.css"
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/authcontext";
import {  useFilterData    } from "../../Context/FilterContext"
import {useWishlistContext} from "../../Context/WishlistContext.js"
import { useAddtoCartContext} from "../../Context/AddtocartContext"
import { useNavigate} from "react-router-dom";
import { Navabar } from "../../components/Navbar/Navabar";
import axios from "axios";


const Product = () => {
  const encodedToken= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY5YTFkNC03NmNhLTQzNTgtYjJiYi0xNjJiODY4OWNhNDMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.1JtJKtvqXZ-46VifI24s_1agwv38Lq2DE2DbSTXcRRw";
  const { dispatch ,Protien, state,data} = useFilterData(); 
  const { auth ,setAuth } = useAuthContext();
  const { myWishlist, addToWishlist, removeFromWishlist } =
  useWishlistContext();
  const { myCart, removeFromCart ,addToCart} = useAddtoCartContext();
  //const [myWishlist, setMyWishlist] = useState([]);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("USER_INFO");
    localStorage.removeItem("TOKEN");

    setAuth({
      loginStatus: localStorage.getItem("TOKEN") ? true : false,
      token: localStorage.getItem("TOKEN"),
      user: JSON.parse(localStorage.getItem("USER_INFO")),
    });
  };
  const categoryClickHandler = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      dispatch({ type: "CHECK", payload: e.target.value });
      return;
    } else {
      dispatch({ type: "UNCHECK", payload: e.target.value });
    }
  };



  return (
    <>
    <div>
   <Navabar></Navabar>
    <input type="checkbox" id="openSidebarMenu"/>
    <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner top"></div>
        <div class="spinner middle"></div>
        <div class="spinner bottom"></div>
    </label>
    <input type="checkbox" id="openSidebarMenu"/>
    <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner top"></div>
        <div class="spinner middle"></div>
        <div class="spinner bottom"></div>
    </label>
    <div id="sidebarMenu">
            <div class="filter-heading">
          </div>
          <div class="Filters">
            <div class="clear">
       
              <span className="clear-btn" onClick={() => dispatch({ type: "clearall" })}>CLEAR ALL</span>
    
          </div>
              <div class="category">
                  <div class="filter-heading">
                      <h3>CATEGORIES</h3>
                  </div>
                  <div class="filter-category">
                      <div class="filter-checkbox">
                          <label class="filter-input">
                   <input type="checkbox"
                      onChange={categoryClickHandler}
                      checked={state.category.includes("protein")}
                      value="protein"
                      />
                   <span>Protien</span>
                   </label>
                          <label class="filter-input">
                   <input type="checkbox" 
                      onChange={categoryClickHandler}
                      checked={state.category.includes("gainer")}
                      value="gainer"
                      />
                   <span>Gainer</span>
                   </label>
                          <label class="filter-input">
                   <input type="checkbox"
                      onChange={categoryClickHandler}
                      checked={state.category.includes("multivitamin")}
                      value="multivitamin"
                      />
                   <span>Multi-Vitamins</span>
                   </label>
                      </div>
      
                  </div>
              

                  <div class="filter-rating">
                      <div class="filter-heading">
                          <h3>Ratings</h3>
                      </div>
                      <label class="filter-input">
                      <input
          name="rating"
          type="radio"
          checked={state.rating === "4"}
          onChange={() => dispatch({ type: "rating", payload: "4" })}
        />
        4 star & above
                   </label>
                      <label class="filter-input">
                      <input
          name="rating"
          type="radio"
          checked={state.rating === "3"}
          onChange={() => dispatch({ type: "rating", payload: "3" })}
        />
        3  star & above
                   </label>
                      <label class="filter-input">
                      <input
          name="rating"
          type="radio"
          checked={state.rating === "2"}
          onChange={() => dispatch({ type: "rating", payload: "2" })}
        />
        2  star & above
                   </label>
                      <label class="filter-input">
                      <input
          name="rating"
          type="radio"
          checked={state.rating === "1"}
          onChange={() => dispatch({ type: "rating", payload: "1" })}
        />
        1  star & above
                   </label>
                  </div>
              </div>
        
              <div class="filter-sort">
                  <div class="filter-heading">
                      <h3>Sort By</h3>
                  </div>
                  <label class="filter-input">
                  <input
                  name="sort"
                  type="radio"
                  checked={state.sort==="hightolow"}
                  onChange={() => dispatch({ type: "hightolow" })}
                />{" "}
                 high to low
                   </label>
                  <label class="filter-input">
                  <input
                  name="sort"
                  type="radio"
                  checked={state.sort === "lowtohigh"}
                  onChange={() => dispatch({ type: "lowtohigh" })}
                />{" "}
               low to high
                   </label>
              </div>
          </div>
      </div>
      <div class="main">
      <div class="card-container">
         
        {
         Protien?.map((items)=>{
          return (
            <div class="cards">
            <div>
              <img class="card-img" src={items.imgSrc} alt={items.title}/>
            </div>
            {myWishlist.find((wishlistItem) => wishlistItem._id === items._id) ? (
         <div className="like-badge">
         <span onClick={()=> removeFromWishlist(items._id)} className="material-icons-outlined ">favorite</span>
</div>
      ) : (
        <div className="dislike-badge">
        <span onClick={()=> addToWishlist(items)} className="material-icons-outlined ">favorite</span>
</div>
      )}
           
            <div class="info">
            <p class="price-label">Rs. {items.price}</p>
            <h3>{items.title}</h3> 
            </div>
            <div class="card-menu">
            <div class="rating">⭐ {items.rating}</div>
              </div> 
              {myWishlist.find((wishlistItem) => wishlistItem._id === items._id) ? (
         <div className="like-badge">
         <span onClick={()=> removeFromWishlist(items._id)} className="material-icons-outlined ">favorite</span>
</div>
      ) : (
        <div className="dislike-badge">
        <span onClick={()=> addToWishlist(items)} className="material-icons-outlined ">favorite</span>
</div>
      )}      {myCart.find((wishlistItem) => wishlistItem._id === items._id) ? (
        <Link to="/cart">
        <div class="card-btn">
        <span class="btn1">Move To Cart</span>
   </div>
   </Link>
     ) : (
     
      <div class="card-btn">
      <span class="btn1"  onClick={()=> addToCart(items)}>Add To Cart</span>
 </div>
     )}
       
        
             </div>
          )
         })
      
        }
           
      
        
     
      </div>
      </div>
      </div>
    </>
  )
}

export default Product