import axios from "axios";

const Get = path => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`http://localhost:5000/api/v1/${path}`).then(
      res => {
        resolve(res.data);
      },
      err => {
        reject(err);
      }
    );
  });
  return promise;
};

const Post = (path, data, token) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`http://localhost:5000/api/v1/${path}`, data, token).then(
      res => {
        resolve(res.data);
      },
      err => {
        reject(err);
      }
    );
  });
  return promise;
};

const Put = (path, data, token) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`http://localhost:5000/api/v1/${path}`, data, token).then(
      res => {
        resolve(res.data);
      },
      err => {
        reject(err);
      }
    );
  });
  return promise;
};

//category
const getCategory = () => Get(`categories`);
const getCategoryEvent = id => Get(`categories/${id}/showevent`);

//event
const getEvent = () => Get("events");
const getDetailEvent = id => Get(`events/${id}/detailevent`);
const postEvent = (data, token) => Post(`events`, data, token);

//order
const getOrderPending = id => Get(`order/${id}/orderbyperson/pending`);
const getOrderConfirmed = id => Get(`order/${id}/orderbyperson/confirmed`);
const getOrderApproved = id => Get(`order/${id}/orderbyperson/approved`);
const postOrder = (data, token) => Post(`order`, data, token);
const putOrder = (id, data, token) => Put(`order/${id}`, data, token);

//favorite
const getFavorite = id => Get(`favorite/${id}`);

const API = {
  getCategory,
  getEvent,
  getDetailEvent,
  postEvent,
  getOrderPending,
  getOrderConfirmed,
  getOrderApproved,
  getCategoryEvent,
  postOrder,
  putOrder,
  getFavorite
};

export default API;
