import React from "react";
import edjsHTML from "editorjs-html";

import DeleteNote from "./DeleteNote";

import { dateFromNow, dateFull } from "../TasksDocsItem/Tasks.helpers.js";

const NoteRow = ({ note }) => {
  const edjsParser = edjsHTML();

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
      <td>
        <DeleteNote noteId={note._id} />
      </td>
    </tr>
  );
};

export default NoteRow;
