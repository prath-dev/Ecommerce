import React from "react";
import { Link } from "react-router-dom";
import { useState,  useEffect } from "react";
import { useAuthContext } from "../../Context/authcontext";
import {  useFilterData    } from "../../Context/FilterContext"
import {useCategoryContext} from "../../Context/CategoryContext"
import { Navabar } from "../../components/Navbar/Navabar";
import  "./Homepage.css" ;


const Homepage = () => {
  const { auth ,setAuth } = useAuthContext();
  const {category, setCategory} = useCategoryContext()
  const { dispatch ,Protien, state} = useFilterData(); 
  const [data, setdata] = useState();

  const url = "api/categories";
  console.log(url)
  const logoutHandler = () => {
    localStorage.removeItem("USER_INFO");
    localStorage.removeItem("TOKEN");

    setAuth({
      loginStatus: localStorage.getItem("TOKEN") ? true : false,
      token: localStorage.getItem("TOKEN"),
      user: JSON.parse(localStorage.getItem("USER_INFO")),
    });
   

  };

  const geturl = async (url) => {
    const data = await fetch(url);
    const ds = await data.json();
    setdata(ds.categories);
    // console.log(ds)
    
  };
  useEffect(() => {
    geturl(url);
  }, []);
  console.log(data);
  return (
    <>
    <Navabar></Navabar>
      <div class="container">
      
    
    <img class="img-home"src={"https://res.cloudinary.com/dwq1mdi4o/image/upload/v1660921263/protien2_nkicsp.webp"} alt={<h2>j</h2>}/>
      <Link  to="/products">
        <div>
          <div  class="text">   <h1>SHOP NOW</h1></div>
      
      </div>
      
      </Link>
  
      
   
      <div class="cards-container">
        <div class="card">
        <img class="logo" src={"https://res.cloudinary.com/dwq1mdi4o/image/upload/v1660918082/fast-delivery_daqqhz.png"} alt={<h2>a</h2>}></img>
     <p class="text-center">100 Geniune Products</p>
       </div>
            <div class="card">
            <img class="logo" src={"https://res.cloudinary.com/dwq1mdi4o/image/upload/v1660918067/geniune-products_aln8eo.png"} alt={<h2>a</h2>}></img>
          <p class="text-center">100 Geniune Products</p>
            </div>
            <div class="card">
            <img class="logo" src={"https://res.cloudinary.com/dwq1mdi4o/image/upload/v1660918063/easy-return_luxs1u.png"} alt={<h2>a</h2>}></img>
          <p class="text-center">30 Days Easy Return</p>
            </div>
         
   </div>
  
      <h2 class="text-center">Featured Categories</h2>

      <div class="cards-container">
      {
                data?.map((items,i)=>{
                  console.log("hiii"+items.categoryName)
                     return (
                      <Link to="/products">
                      <div class="card">
                      <img  onClick={() => dispatch({ type: "CHECK" ,payload:"gainer"})}
            
                      class="logo" src={items.imgSrc} alt={items.productName}/>
                   </div>
                   </Link>
               
                     )
              
                    })
               
                   } 
                   
      </div>
  </div>
    </>
  )
};

export default Homepage;
