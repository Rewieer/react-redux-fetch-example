import { createStore, combineReducers } from "redux";

let store = null;

const counter = function(state, action) {
  if (action.type === "INCREMENT")
    return state + 1;
  else if (action.type === "DECREMENT")
    return state - 1;

  return state === undefined ? 0 : state;
};

const users = function(state, action) {
  if (action.type === "STORE_USERS") {
    return {
      isFetching: false,
      data: action.data,
    };
  } else if (action.type === "START_FETCHING_USERS") {
    return {
      ...state,
      isFetching: true,
    }
  }

  if (!state) return {
    isFetching: false,
    data: [],
  };
  return state;
};

export default function createAndSetStore() {
  store = createStore(combineReducers({
    counter,
    users,
  }));

  return store;
}

export function getStore() {
  return store;
}