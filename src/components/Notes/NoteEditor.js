import React from "react";
import { useStoreActions } from "easy-peasy";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";

const NoteEditor = ({ taskId, setShowNoteEditor }) => {
  const { postNote } = useStoreActions(actions => actions);

  const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: "note-editor",
    placeholder: "Enter your note...",
    autofocus: true,
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"]
      },
      list: {
        class: List,
        inlineToolbar: ["link", "bold"]
      },
      embed: {
        class: Embed,
        inlineToolbar: false,
        config: {
          services: {
            youtube: true,
            coub: true
          }
        }
      }
    }
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const note = await editor.save();

      // Submit new note only if some blocks are added
      note.blocks.length && (await postNote({ task: taskId, data: note }));

      setShowNoteEditor(prevState => !prevState);
    } catch (error) {
      console.warn("Error occurred while creating a note: ", error);
    }
  };

  return (
    <>
      <tr>
        <td colSpan="6" id="note-editor"></td>
      </tr>
      <tr>
        <td colSpan="6">
          <button onClick={handleSubmit}>Submit</button>
        </td>
      </tr>
    </>
  );
};

export default React.memo(NoteEditor);
