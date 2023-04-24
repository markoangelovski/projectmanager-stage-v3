import React, { useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import EditorJS from "@editorjs/editorjs";
import { notesConfig } from "./Notes.config";

const EditNoteForm = ({ note, setToggleEditNote }) => {
  const { editNote } = useStoreActions(actions => actions);

  let editor;
  useEffect(() => {
    // eslint-disable-next-line
    editor = new EditorJS({
      ...notesConfig,
      holder: `note-editor-${note._id}`,
      data: note.data
    });
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const editedNote = await editor.save();
      const isNoteEdited =
        JSON.stringify(note.data.blocks) !== JSON.stringify(editedNote.blocks);

      // Submit new note only if some blocks are edited
      if (isNoteEdited) {
        await editNote({ noteId: note._id, data: editedNote });
        setToggleEditNote(false);
      }
    } catch (error) {
      console.warn("Error occurred while creating a note: ", error);
    }
  };

  return (
    <>
      <tr>
        <td colSpan="6" id={`note-editor-${note._id}`}></td>
      </tr>
      <tr>
        <td colSpan="5">
          <button onClick={handleSubmit}>Submit</button>
        </td>
        <td>
          <button onClick={() => setToggleEditNote(false)}>Cancel</button>
        </td>
      </tr>
    </>
  );
};

// export default React.memo(EditNoteForm);
export default EditNoteForm;
