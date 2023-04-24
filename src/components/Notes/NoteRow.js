import React, { useState } from "react";
import edjsHTML from "editorjs-html";

import EditNote from "./EditNote.js";
import DeleteNote from "./DeleteNote.js";

import EditNoteForm from "../Notes/EditNoteForm.js";

import { dateFromNow, dateFull } from "../TasksDocsItem/Tasks.helpers.js";

const NoteRow = ({ note }) => {
  const [toggleEditNote, setToggleEditNote] = useState(false);

  const edjsParser = edjsHTML();

  if (toggleEditNote)
    return <EditNoteForm note={note} setToggleEditNote={setToggleEditNote} />;

  return (
    <tr>
      <td
        dangerouslySetInnerHTML={{
          __html: edjsParser.parse(note?.data).join("")
        }}
        colSpan="3"
        className="text-muted"
      ></td>
      <td className="text-muted" title={dateFull(note.createdAt)}>
        {dateFromNow(note.createdAt)}
      </td>
      <td className="text-muted" title={dateFull(note.updatedAt)}>
        {dateFromNow(note.updatedAt)}
      </td>
      <td style={{ display: "flex", justifyContent: "space-between" }}>
        <EditNote setToggleEditNote={setToggleEditNote} />
        <DeleteNote noteId={note._id} />
      </td>
    </tr>
  );
};

// export default React.memo(NoteRow);
export default NoteRow;
