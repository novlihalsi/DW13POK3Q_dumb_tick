import {
  GET_ORDERPEND,
  GET_ORDERCONFIRM,
  POST_ORDER,
  GET_ORDERAPPROVED,
  PUT_ORDER,
  GET_ORDER
} from "../config/constant";
import API from "../config/Api";

export const getOrder = id => {
  return {
    type: GET_ORDER,
    payload: API.getOrder(id)
  };
};

export const getOrderPend = id => {
  return {
    type: GET_ORDERPEND,
    payload: API.getOrderPending(id)
  };
};

export const getOrderApproved = id => {
  return {
    type: GET_ORDERAPPROVED,
    payload: API.getOrderApproved(id)
  };
};

export const getOrderConfirm = id => {
  return {
    type: GET_ORDERCONFIRM,
    payload: API.getOrderConfirmed(id)
  };
};

export const postOrder = (data, token) => {
  return {
    type: POST_ORDER,
    payload: API.postOrder(data, token)
  };
};

export const putOrder = (id, data, token) => {
  return {
    type: PUT_ORDER,
    payload: API.putOrder(id, data, token)
  };
};
