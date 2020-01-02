import { GET_FAVORITE } from "../config/constant";
import API from "../config/Api";

export const getFavorite = id => {
  return {
    type: GET_FAVORITE,
    payload: API.getFavorite(id)
  };
};
