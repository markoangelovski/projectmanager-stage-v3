import React from "react";
import moment from "moment";
import edjsHTML from "editorjs-html";

import DeleteNote from "./DeleteNote";

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
      <td className="text-muted">
        {moment(note.createdAt).format("ddd, MMM Do, 'GG.")}
      </td>
      <td className="text-muted">
        {moment(note.updatedAt).format("ddd, MMM Do, 'GG.")}
      </td>
      <td>
        <DeleteNote noteId={note._id} />
      </td>
    </tr>
  );
};

export default NoteRow;
