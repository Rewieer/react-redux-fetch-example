import { getStore } from "./store";
import fetch from "./fetch";

export default {
  fetch: () => {
    getStore().dispatch({
      type: "START_FETCHING_USERS",
    });

    return fetch("/users").then(users => {
      getStore().dispatch({
        type: "STORE_USERS",
        data: users,
      })
    })
  }
}