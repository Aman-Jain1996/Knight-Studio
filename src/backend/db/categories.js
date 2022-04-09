import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action",
  },
  {
    _id: uuid(),
    categoryName: "Crime",
  },
  {
    _id: uuid(),
    categoryName: "SCI_FI",
  },
  {
    _id: uuid(),
    categoryName: "Comedy",
  },
  {
    _id: uuid(),
    categoryName: "Horror",
  },
  {
    _id: uuid(),
    categoryName: "Biography",
  },
  {
    _id: uuid(),
    categoryName: "Heist",
  },
];
