import { createStore } from "easy-peasy";

import backendStore from "./backend.model.js";
import userStore from "./user.model";
import eventsStore from "./events.model.js";
import tasksStore from "./tasks.model.js";
import notesStore from "./notes.model.js";
import statsStore from "./stats.model.js";

const store = createStore({
  ...backendStore,
  ...userStore,
  ...eventsStore,
  ...tasksStore,
  ...notesStore,
  ...statsStore
});

export default store;
