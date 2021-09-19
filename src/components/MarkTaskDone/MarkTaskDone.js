import React from "react";
import { useStoreActions } from "easy-peasy";
import { FaCheck, FaTimes } from "react-icons/fa";

import { EditTaskIcon } from "./MarkTaskDone.styles.js";

const MarkTaskDone = ({ done, taskId, taskTitle }) => {
  const { editTask } = useStoreActions(actions => actions);

  const handleEditTask = () => {
    if (
      window.confirm(`Mark task "${taskTitle}" as ${done ? "not" : ""} done?`)
    )
      editTask({
        taskId,
        payload: [
          { propName: "done", propValue: JSON.stringify(!done) },
          { propName: "column", propValue: done ? "In Progress" : "Completed" }
        ]
      });
  };

  return (
    <EditTaskIcon
      title={`Mark task ${taskTitle} as done`}
      done={done}
      onClick={handleEditTask}
    >
      {done ? <FaCheck /> : <FaTimes />}
    </EditTaskIcon>
  );
};

export default MarkTaskDone;
