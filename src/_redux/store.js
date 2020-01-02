import { createStore, combineReducers, applyMiddleware } from "redux";
import { categories } from "../_reducers/categories";
import { event } from "../_reducers/event";
import { order } from "../_reducers/order";
import { favorite } from "../_reducers/favorites";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

const reducers = combineReducers({
  categories,
  event,
  order,
  favorite
});

const middlewares = [logger, promiseMiddleware];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
