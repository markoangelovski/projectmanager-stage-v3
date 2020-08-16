import { getTasksDocsCall } from "../drivers/Tasks/tasks.driver.js";

const getTaskDocs = async (actions, payload) => {
  try {
    const res = await getTasksDocsCall(payload);
    if (!res.error) {
      actions.setTaskDocs(res.docs);
      actions.setHasMoreTaskDocs(res.stats);
    }
  } catch (error) {
    console.warn(error);
  }
};

const setTaskDocs = (state, docs) => {
  state.taskDocsSkip += 20;
  state.taskDocs = [...state.taskDocs, ...docs];
};

const setHasMoreTaskDocs = (state, stats) => {
  state.hasMoreTaskDocs = stats.remaining ? true : false;
};

export { getTaskDocs, setTaskDocs, setHasMoreTaskDocs };
