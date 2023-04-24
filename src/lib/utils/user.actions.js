import {
  checkAuthCall,
  logInCall,
  logOutCall
} from "../drivers/User/user.driver.js";

const setIsBackendAlive = (state, payload) => {
  state.isBackendAlive = payload;
};

const setIsLoggedIn = (state, payload) => {
  state.isLoggedIn = payload;
};

const makeAuthFunc = authFunc => async (actions, payload) => {
  try {
    const res = await authFunc(payload);

    if (res.status >= 500) actions.setIsBackendAlive(false);

    if (!res.error) {
      actions.setIsLoggedIn(true);
      return true;
    } else {
      actions.setIsLoggedIn(false);
      return false;
    }
  } catch (error) {
    console.warn(error);
    actions.setIsLoggedIn(false);
    actions.setIsBackendAlive(false);
    return false;
  }
};

const logIn = makeAuthFunc(logInCall);
const checkAuth = makeAuthFunc(checkAuthCall);

const logOut = async actions => {
  try {
    const res = await logOutCall();
    if (!res.error) {
      actions.setIsLoggedIn(false);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export { setIsBackendAlive, setIsLoggedIn, logIn, logOut, checkAuth };
