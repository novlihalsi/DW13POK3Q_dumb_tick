import {
  GET_EVENT_FULFILLED,
  GET_DETAIL_EVENT_FULFILLED,
  GET_EVENT_PENDING,
  GET_EVENT_REJECTED,
  POST_EVENT_PENDING,
  POST_EVENT_FULFILLED,
  POST_EVENT_REJECTED
} from "../config/constant";

const initialState = {
  events: [],
  detail: [],
  postevent: [],
  posteventpending: false,
  posteventrejected: false,
  geteventpending: false,
  geteventreject: false
};

export const event = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_PENDING:
      return {
        ...state,
        geteventpending: true,
        geteventreject: false
      };
    case GET_EVENT_REJECTED:
      return {
        ...state,
        geteventreject: true,
        geteventpending: false
      };
    case GET_EVENT_FULFILLED:
      return {
        ...state,
        events: action.payload,
        geteventpending: false,
        geteventreject: false
      };
    case POST_EVENT_PENDING:
      return {
        ...state,
        posteventpending: true,
        posteventrejected: false
      };
    case POST_EVENT_REJECTED:
      return {
        ...state,
        posteventrejected: true,
        posteventpending: false
      };
    case POST_EVENT_FULFILLED:
      return {
        ...state,
        postevent: action.payload,
        posteventpending: false,
        posteventrejected: false
      };
    case GET_DETAIL_EVENT_FULFILLED:
      return {
        ...state,
        detail: action.payload
      };
    default:
      return state;
  }
};
