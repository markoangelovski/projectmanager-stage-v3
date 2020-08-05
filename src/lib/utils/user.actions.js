import {
  logInCall,
  logOutCall,
  checkAuthCall
} from "../drivers/User/user.driver.js";

const setIsLoggedIn = (state, payload) => {
  state.isLoggedIn = payload;
};

const makeAuthFunc = authFunc => async (actions, payload) => {
  try {
    const res = await authFunc(payload);
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

export { setIsLoggedIn, logIn, logOut, checkAuth };
