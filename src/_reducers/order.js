import {
  GET_ORDERPEND_FULFILLED,
  GET_ORDERCONFIRM_FULFILLED,
  POST_ORDER_FULFILLED,
  POST_ORDER_REJECTED,
  POST_ORDER_PENDING,
  GET_ORDERAPPROVED_FULFILLED,
  PUT_ORDER_FULFILLED,
  PUT_ORDER_PENDING,
  PUT_ORDER_REJECTED,
  GET_ORDER_FULFILLED
} from "../config/constant";

const initialState = {
  ticket: [],
  orderpend: [],
  orderconf: [],
  dataorder: [],
  putdataorder: [],
  order: [],
  error: false,
  isloading: false
};

export const order = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_FULFILLED:
      return {
        ...state,
        order: action.payload
      };
    case GET_ORDERPEND_FULFILLED:
      return {
        ...state,
        orderpend: action.payload
      };
    case GET_ORDERAPPROVED_FULFILLED:
      return {
        ...state,
        ticket: action.payload
      };
    case GET_ORDERCONFIRM_FULFILLED:
      return {
        ...state,
        orderconf: action.payload
      };
    case POST_ORDER_PENDING:
      return {
        ...state,
        isloading: true,
        error: false
      };
    case POST_ORDER_REJECTED:
      return {
        ...state,
        error: true,
        isloading: false
      };
    case POST_ORDER_FULFILLED:
      return {
        ...state,
        dataorder: action.payload,
        error: false,
        isloading: false
      };
    case PUT_ORDER_PENDING:
      return {
        ...state,
        isloading: true,
        error: false
      };
    case PUT_ORDER_REJECTED:
      return {
        ...state,
        error: true,
        isloading: false
      };
    case PUT_ORDER_FULFILLED:
      return {
        ...state,
        putdataorder: action.payload,
        error: false,
        isloading: false
      };
    default:
      return state;
  }
};
