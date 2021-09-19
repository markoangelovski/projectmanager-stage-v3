import React, { useState } from "react";
import moment from "moment";

import MarkTaskDone from "../MarkTaskDone/MarkTaskDone.js";

import NoteEditor from "../Notes/NoteEditor.js";
import NewNote from "../Notes/NewNote.js";

import { EventRowCell, TableRowFix } from "./TasksDocsItem.styles.js";
import NoteRow from "../Notes/NoteRow.js";
import TaslExtermalLink from "./TaslExtermalLink.js";

const DayStatsTableRow = ({ task }) => {
  const renders = React.useRef(0);

  const [toggleDetails, setToggleDetails] = useState(false);
  const [toggleNewNote, setToggleNewNote] = useState(false);

  const lastNote = task.notes[task.notes.length - 1];

  return (
    <>
      <TableRowFix>
        <EventRowCell>
          <span onClick={() => setToggleDetails(!toggleDetails)}>
            {task.title}, {renders.current++}
          </span>
        </EventRowCell>
        <EventRowCell>{task.pl}</EventRowCell>
        <EventRowCell>
          {moment(task.dueDate).format("ddd, MMM Do, 'GG.")}
        </EventRowCell>
        <EventRowCell>
          {moment(task.createdAt).format("ddd, MMM Do, 'GG.")}
        </EventRowCell>
        <EventRowCell>
          {moment(task.updatedAt).format("ddd, MMM Do, 'GG.")}
        </EventRowCell>
        <EventRowCell>
          {task.kanboard && <TaslExtermalLink link={task.kanboard} />}
          <MarkTaskDone
            done={task.done}
            taskId={task._id}
            taskTitle={task.title}
          />
          <NewNote setToggleNewNote={setToggleNewNote} />
        </EventRowCell>
      </TableRowFix>

      {!toggleDetails && lastNote && <NoteRow note={lastNote} />}

      {toggleDetails && (
        <>
          <tr>
            <td colSpan="6" className="text-muted">
              {task.description}
            </td>
          </tr>
          {task.notes.map(note => {
            return <NoteRow key={note._id} note={note} />;
          })}
        </>
      )}

      {toggleNewNote && (
        <NoteEditor taskId={task._id} setShowNoteEditor={setToggleNewNote} />
      )}
    </>
  );
};

export default React.memo(DayStatsTableRow);
