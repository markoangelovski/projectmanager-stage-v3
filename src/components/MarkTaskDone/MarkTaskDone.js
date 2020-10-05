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
        payload: [{ propName: "done", propValue: JSON.stringify(!done) }]
      });
  };

  return (
    <EditTaskIcon done={done} onClick={handleEditTask}>
      {done ? <FaCheck /> : <FaTimes />}
    </EditTaskIcon>
  );
};

export default MarkTaskDone;
