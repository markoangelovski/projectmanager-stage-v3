import {
  getTasksDocsCall,
  editTaskCall
} from "../drivers/Tasks/tasks.driver.js";

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

const editTask = async (actions, { taskId, payload }) => {
  try {
    const res = await editTaskCall(taskId, payload);

    if (!res.error) {
      actions.updateTaskDocs({ taskId, payload });
    }
  } catch (error) {
    console.warn(error);
  }
};

const updateTaskDocs = (state, { taskId, payload }) => {
  // Extract values - payload=[{propName: "title", propValue: "Updated title"}, {propName: "done", propValue: "false"}];
  const updateVals = payload.reduce((acc, current) => {
    acc[current.propName] = current.propValue;
    return acc;
  }, {});
  // Update the new event values in state
  state.taskDocs = state.taskDocs.map(taskDoc => {
    taskDoc.tasks = taskDoc.tasks.map(task => {
      if (task._id === taskId) {
        return { ...task, ...updateVals };
      }
      return task;
    });
    return taskDoc;
  });
};

export {
  getTaskDocs,
  setTaskDocs,
  setHasMoreTaskDocs,
  editTask,
  updateTaskDocs
};
