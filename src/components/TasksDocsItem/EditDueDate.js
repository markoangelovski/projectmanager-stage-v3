import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
import { FaCheck } from "react-icons/fa";

import { dateStd, dateFull } from "./Tasks.helpers";

const EditDueDate = ({ taskId, taskTitle, date, setNewDueDate }) => {
  const [dueDate, setDueDate] = useState(dateStd(date));

  const { editTask } = useStoreActions(actions => actions);

  const handleEditTask = () => {
    if (
      window.confirm(
        `Set new due date for task "${taskTitle}" to ${dateFull(dueDate)}?`
      )
    )
      editTask({
        taskId,
        payload: [
          { propName: "dueDate", propValue: `${new Date(dueDate).getTime()}` }
        ]
      });
    setNewDueDate();
  };

  return (
    <>
      <input
        type="date"
        style={{ border: "none", background: "transparent" }}
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      ></input>
      <FaCheck onClick={handleEditTask} />
    </>
  );
};

export default EditDueDate;
