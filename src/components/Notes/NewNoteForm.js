import React from "react";
import { useStoreActions } from "easy-peasy";
import EditorJS from "@editorjs/editorjs";
import { notesConfig } from "./Notes.config";

const NewNoteForm = ({ taskId, setToggleNewNote }) => {
  const { postNote } = useStoreActions(actions => actions);

  const editor = new EditorJS({
    ...notesConfig,
    holder: `note-editor-${taskId}`
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const note = await editor.save();
      // Submit new note only if some blocks are added
      if (note.blocks.length) {
        await postNote({ task: taskId, data: note });
        setToggleNewNote(prevState => !prevState);
      }
    } catch (error) {
      console.warn("Error occurred while creating a note: ", error);
    }
  };

  return (
    <>
      <tr>
        <td colSpan="6" id={`note-editor-${taskId}`}></td>
      </tr>
      <tr>
        <td colSpan="6">
          <button onClick={handleSubmit}>Submit</button>
        </td>
      </tr>
    </>
  );
};

export default React.memo(NewNoteForm);
// export default NewNoteForm;
