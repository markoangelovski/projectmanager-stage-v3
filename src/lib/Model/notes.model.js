import { thunk, action } from "easy-peasy";

import {
  updateTaskDocsWhenNoteCreated,
  postNote,
  updateTaskDocsWhenNoteEdited,
  editNote,
  updateTaskDocsWhenNoteDeleted,
  deleteNote
} from "../utils/notes.actions.js";

const notesStore = {
  // Notes thunks
  postNote: thunk((actions, payload) => postNote(actions, payload)),
  editNote: thunk((actions, payload) => editNote(actions, payload)),
  deleteNote: thunk((actions, payload) => deleteNote(actions, payload)),

  // Notes actions
  updateTaskDocsWhenNoteCreated: action((state, payload) =>
    updateTaskDocsWhenNoteCreated(state, payload)
  ),
  updateTaskDocsWhenNoteEdited: action((state, payload) =>
    updateTaskDocsWhenNoteEdited(state, payload)
  ),
  updateTaskDocsWhenNoteDeleted: action((state, payload) =>
    updateTaskDocsWhenNoteDeleted(state, payload)
  )
};

export default notesStore;
