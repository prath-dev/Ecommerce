import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid() ,
    title: "ON Serious Mass Weight Gainer",
    rating: "3",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    price: "1,699",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/gainer/on-gainer.webp",
    imgAlt: "on-gainer",
    categoryName: "gainer",
  },
  {
    _id: uuid() ,
    title: "GNC Mega Men Multivitamin",
    rating: "2",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    price: "2,399",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/multi-vitamins/gnc-mega-men.webp",
    imgAlt: "gnc-mega-men",
    categoryName: "multivitamin",
  },
  {
    _id:  uuid(),
    title: "Myprotein Whey Protein",
    rating: "5",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    price: "6,599",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/whey-protein/myprotein-whey-protein.webp",
    imgAlt: "myprotein-whey-protein",
    categoryName: "protein",
  },
  {
    _id:  uuid(),
    title: "MuscleBlaze creatine monohydrate",
    rating: "4",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    price: "499",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/creatine/mb-creatine.webp",
    imgAlt: "mb-creatine",
    categoryName: "creatine",
  },
  {
    _id : uuid(),
    title: "ON Whey Protein Powder",
    ratings: "4.5",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    price: "100",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/whey-protein/ON-Whey-Protein-5-lb.webp",
    imgAlt: "ON-Whey-Protein-5-lb",
    categoryName: "protein",
    rating : 1 ,
  },
  
  {
    _id: uuid(),
    title: "MuscleBlaze Super Gainer ",
    price: "299",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/gainer/mb-gainer.webp",
    imgAlt: "mb-gainer",
    categoryName: "gainer",
    rating : 3 ,
  },
  {
    _id:uuid(),
    title: "Nutrilite Multivitamin",
    price: "399",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/multi-vitamins/amway-muti-vit.jpeg",
    imgAlt: "amway-muti-vit",
    categoryName: "multivitamin",
    rating : 4 ,
  },
  {

    _id: uuid(),
    title: "MuscleBlaze Omega 3 Fish Oil",
    price: "999",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/multi-vitamins/mb-fish-oil.webp",
    imgAlt: "mb-fish-oil",
    categoryName: "multivitamin",
    rating : 2 ,
  },
  {
    _id: uuid(),
    title: "Dymatize mass gainer",
    price: "499",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/gainer/dymatize-gainer.webp",
    imgAlt: "dymatize-gainer",
    categoryName: "gainer",
    rating : 1,
  },
  {
    _id: uuid(),
    title: "GNC Pro creatine monohydrate",
    rating: "1.9",
    price: "1,299",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/creatine/gnc-creatine.webp",
    imgAlt: "gnc-creatine",
    categoryName: "creatine",
  },
  {
    _id: uuid() ,
    title: "MuscleBlaze MB-VITE Multivitamin",
    rating: "4",
    price: "1,199",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/multi-vitamins/mb-multi-vit.webp",
    imgAlt: "mb-multi-vit",
    categoryName: "multivitamin",
  },
  {
    _id: uuid() ,
    title: "MuscleTech MassTech Extreme",
    rating: "1",
    mrpCalculation: "999",
    discountPrice: "199",
    discountPriceCalculation: "199",
    discountPercent: "80",
    price: "4,699",
    imgSrc:
      "https://fitmart-screens.netlify.app/assets/products/gainer/muscletech-gainer.webp",
    imgAlt: "muscletech-gainer",
    categoryName: "gainer",
  },


 
 
  
];
