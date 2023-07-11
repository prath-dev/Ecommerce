import axios from "axios";
import { useState, useContext, useEffect, createContext } from "react";

const CategoryContext = createContext(null);

const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    const categoryCall = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategory(response.data.categories);
        console.log(response)
      } catch (err) {
        console.log("error from category context", err);
      }
    };
console.log(categoryCall())    
  }, []);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategoryContext = () => useContext(CategoryContext);

export { CategoryContextProvider, useCategoryContext };