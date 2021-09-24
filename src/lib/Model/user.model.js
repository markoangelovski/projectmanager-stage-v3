import { thunk, action } from "easy-peasy";

import {
  setIsLoggedIn,
  logIn,
  logOut,
  checkAuth
} from "../utils/user.actions.js";

const userStore = {
  // User state
  isLoggedIn: false,

  // User thunks
  logIn: thunk((actions, payload) => logIn(actions, payload)),
  logOut: thunk(actions => logOut(actions)),
  checkAuth: thunk((actions, payload) => checkAuth(actions, payload)),

  // User actions
  setIsLoggedIn: action((state, payload) => setIsLoggedIn(state, payload))
};

export default userStore;
