import { GET_EVENT, GET_DETAIL_EVENT, POST_EVENT } from "../config/constant";
import API from "../config/Api";

export const getEvent = () => {
  return {
    type: GET_EVENT,
    payload: API.getEvent()
  };
};

export const getDetailEvent = id => {
  return {
    type: GET_DETAIL_EVENT,
    payload: API.getDetailEvent(id)
  };
};

export const postEvent = (data, token) => {
  return {
    type: POST_EVENT,
    payload: API.postEvent(data, token)
  };
};
