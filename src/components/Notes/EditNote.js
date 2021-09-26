import React from "react";
import { FaEdit } from "react-icons/fa";

import { EditNoteIcon } from "./EditNote.styles.js";

const EditNote = ({ setToggleEditNote }) => {
  return (
    <EditNoteIcon
      onClick={() => setToggleEditNote(prevState => !prevState)}
      title="Edit this note"
    >
      <FaEdit />
    </EditNoteIcon>
  );
};

export default EditNote;
