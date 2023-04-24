import { thunk, action } from "easy-peasy";

import {
  getTaskDocs,
  setTaskDocs,
  filterTaskDocs,
  resetTaskDocs,
  setHasMoreTaskDocs,
  editTask,
  updateTaskDocs
} from "../utils/tasks.actions.js";

const taslsStore = {
  // Tasks state
  taskDocs: [],
  filteredTaskDocs: [],
  taskDocsSkip: 0,
  hasMoreTaskDocs: false,

  // Tasks thunks
  getTaskDocs: thunk((actions, payload) => getTaskDocs(actions, payload)),
  editTask: thunk((actions, payload) => editTask(actions, payload)),

  // Tasks actions
  setTaskDocs: action((state, payload) => setTaskDocs(state, payload)),
  filterTaskDocs: action((state, keyword) => filterTaskDocs(state, keyword)),
  resetTaskDocs: action((state, payload) => resetTaskDocs(state, payload)),
  setHasMoreTaskDocs: action((state, payload) =>
    setHasMoreTaskDocs(state, payload)
  ),
  updateTaskDocs: action((state, payload) => updateTaskDocs(state, payload))
};

export default taslsStore;
