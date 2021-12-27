
import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";

import { authReducer } from "./reducers.js/authReducer";

const middlewares = [thunk];

const reducer = combineReducers({
  authReducer,

});

const store = createStore(reducer,applyMiddleware(...middlewares));

export default store;
