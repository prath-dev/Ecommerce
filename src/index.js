import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { AuthContextProvider } from "../src/Context/authcontext";
import {WishlistContextProvider } from '../src/Context/WishlistContext' ;
import {AddtoCartContextProvider}from "../src/Context/AddtocartContext"
import {CategoryContextProvider} from "../src/Context/CategoryContext"
//import { BrowserRouter as Router } from "react-router-dom"


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
<AuthContextProvider>
<WishlistContextProvider>
  <AddtoCartContextProvider>
    <CategoryContextProvider>
    <App/>
    </CategoryContextProvider>
    </AddtoCartContextProvider>
    </WishlistContextProvider>
    </AuthContextProvider>
          </React.StrictMode>,
  document.getElementById("root")
);