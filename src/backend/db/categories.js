import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "protein",
    imgSrc:
    "https://res.cloudinary.com/dwq1mdi4o/image/upload/v1660910874/mb-multi-vit_fj3fgv.webp",

  },
  {
    _id: uuid(),
    categoryName: "gainer",
    imgSrc:
    "https://res.cloudinary.com/dwq1mdi4o/image/upload/v1660910909/mb-gainer_x5sn2h.webp",
  },
  {
    _id: uuid(),
    categoryName: "multivitamin",
    imgSrc:
    "https://res.cloudinary.com/dwq1mdi4o/image/upload/v1660910909/ON-Whey-Protein-5-lb_1_xopdnp.webp",
  },
];
