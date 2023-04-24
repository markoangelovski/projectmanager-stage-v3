import React from "react";
import { useStoreActions } from "easy-peasy";
import { FaBan } from "react-icons/fa";

import { DeleteNoteIcon } from "./DeleteNote.styles";

const DeleteNote = ({ noteId }) => {
  const { deleteNote } = useStoreActions(actions => actions);

  return (
    <DeleteNoteIcon
      title="Delete this note"
      onClick={() =>
        window.confirm("Are you sure you want to delete this note?") &&
        deleteNote(noteId)
      }
    >
      <FaBan />
    </DeleteNoteIcon>
  );
};

export default DeleteNote;
