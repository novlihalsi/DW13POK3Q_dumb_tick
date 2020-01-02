import { GET_FAVORITE_FULFILLED } from "../config/constant";

const initialState = {
  favorite: []
};

export const favorite = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_FULFILLED:
      return {
        ...state,
        favorite: action.payload
      };
    default:
      return state;
  }
};
