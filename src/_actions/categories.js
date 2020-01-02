import { GET_CATEGORIES, GET_CATEGORIES_EVENT } from "../config/constant";
import API from "../config/Api";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: API.getCategory()
  };
};

export const getCategoriesevent = id => {
  return {
    type: GET_CATEGORIES_EVENT,
    payload: API.getCategoryEvent(id)
  };
};
