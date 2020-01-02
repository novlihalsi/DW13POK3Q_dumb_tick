import {
  GET_CATEGORIES_FULFILLED,
  GET_CATEGORIES_EVENT_FULFILLED
} from "../config/constant";

const initialState = {
  categories: [],
  showevent: []
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_FULFILLED:
      return {
        ...state,
        categories: action.payload
      };
    case GET_CATEGORIES_EVENT_FULFILLED:
      return {
        ...state,
        showevent: action.payload
      };
    default:
      return state;
  }
};
