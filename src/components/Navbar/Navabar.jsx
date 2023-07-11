import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navabar = () => {
  return (
  <>
      <div className='App'>
  <header className="main-navbar">
    <Link to="/">
        <div className="player">Buyceps.com</div>
        </Link>
     
      <Link to="/wish">
       <div>
      <span style={{color:"black"}}  className="material-icons-outlined ">favorite</span>
      Wishlist
      </div>
      </Link>
      <Link to="/cart">
      <div>
      <span class="material-icons-outlined">shopping_bag</span>
      Cart
      </div>
      </Link>

      
    
       
      
    </header>

 </div>
  </>
  )
}

export {Navabar}