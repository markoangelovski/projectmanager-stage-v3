import { action } from "easy-peasy";

import { setIsBackendAlive } from "../utils/user.actions.js";

const backendStore = {
  // Backend state
  isBackendAlive: true,
  // Backend actions
  setIsBackendAlive: action((state, payload) =>
    setIsBackendAlive(state, payload)
  )
};

export default backendStore;
