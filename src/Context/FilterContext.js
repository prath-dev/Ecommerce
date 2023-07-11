import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";


const FilterContext = createContext();
const fliterreducer = (state, action) => {
// console.log("state"+state);

switch (action.type) {
    case "clearall":
        return {
          ...state,
          sort: null,
          rating: null,
          category: []
        };

      case "lowtohigh":
        return {
          ...state,
          sort: action.type
        };
    case "hightolow":
      return {
        ...state,
        sort: action.type,
      };
    case "rating":
      return {
        ...state,
        rating: action.payload,
      };
   
    case "CHECK":
      return { ...state, category: [...state.category, action.payload] };

    case "UNCHECK":
      return {
        ...state,
        category: state.category.filter((el) => el !== action.payload),
      };
      
    default:
      return state;
  }
};

const initialvalue = {
  sort:"",
  rating: "",
  category: ""
};

const Filterdata = ({ children }) => {
  const [data, setdata] = useState();
  const url = "/api/products";
console.log(url)
  const geturl = async (url) => {
    const data = await fetch(url);
    const ds = await data.json();
    setdata(ds.products);
     console.log(ds)
  };

  useEffect(() => {
    geturl(url);
  }, []);
  console.log("da"+url);

  
  function getsorteddata(datas, sort) {
    if (sort && sort === "lowtohigh") {
      return datas.sort((a, b) => a.price - b.price);
    } else if (sort === "hightolow") {
      return datas.sort((a, b) => b.price - a.price);
    } else return datas;
  }
  function ratingfilter(ratingdatax, rating) {
    console.log(ratingdatax)
    return ratingdatax?.filter((item) => {
      if (rating === "1") {
        return item.rating >= 1;
      } else if (rating === "2") {
        return item.rating >= 2;
      } else if (rating === "3") {
        return item.rating >= 3;
      } else if (rating === "4") {
        return item.rating >= 4;
      } 
      else{
        return ratingdatax
      }
    });
  }
  function categoryfilterdata(rating, categorys) {
    if(categorys.length<=0){
      return rating
    }
    else{
      return  rating?.filter((e) =>  categorys.includes(e.categoryName));
    }

   //datas.filter((i)=>i.categories.includes(categoryName))

  }

  const [state, dispatch] = useReducer(fliterreducer, initialvalue);

  const categorys = getsorteddata(data, state.sort);
  const ratingnew = ratingfilter(categorys, state.rating);
  const Protien = categoryfilterdata(ratingnew, state.category);
  console.log("tshirt data");

  console.log(state.category.length)

  return (
    <FilterContext.Provider value={{ state, dispatch, data, Protien }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilterData = () => useContext(FilterContext);

export { useFilterData, Filterdata };
