import React from "react";
import { FaPlus } from "react-icons/fa";

import { NewNoteIcon } from "./NewNote.styles.js";

const NewNote = ({ setToggleNewNote }) => {
  return (
    <NewNoteIcon
      title="Create a new note"
      onClick={() => setToggleNewNote(prevState => !prevState)}
    >
      <FaPlus />
    </NewNoteIcon>
  );
};

export default NewNote;
