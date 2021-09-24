import React, { useState } from "react";

import MarkTaskDone from "../MarkTaskDone/MarkTaskDone.js";

import NewNoteBtn from "../Notes/NewNoteBtn.js";
import NewNoteForm from "../Notes/NewNoteForm.js";

import { EventRowCell, TableRowFix } from "./TasksDocsItem.styles.js";
import NoteRow from "../Notes/NoteRow.js";
import TaskExtermalLink from "./TaskExtermalLink.js";

import { dateFromNow, dateFull } from "./Tasks.helpers.js";

const DayStatsTableRow = ({ task }) => {
  const renders = React.useRef(0);

  const [toggleDetails, setToggleDetails] = useState(false);
  const [toggleNewNote, setToggleNewNote] = useState(false);

  const lastNote = task.notes[task.notes.length - 1];

  // console.log(`toggleNewNote: `, toggleNewNote);
  return (
    <>
      <TableRowFix>
        <EventRowCell>
          <span onClick={() => setToggleDetails(!toggleDetails)}>
            {task.title}
          </span>
          , {renders.current++}
        </EventRowCell>
        <EventRowCell>{task.pl}</EventRowCell>
        <EventRowCell title={dateFull(task.dueDate)}>
          {dateFromNow(task.dueDate)}
        </EventRowCell>
        <EventRowCell title={dateFull(task.createdAt)}>
          {dateFromNow(task.createdAt)}
        </EventRowCell>
        <EventRowCell title={dateFull(task.updatedAt)}>
          {dateFromNow(task.updatedAt)}
        </EventRowCell>
        <EventRowCell>
          {task.kanboard && <TaskExtermalLink link={task.kanboard} />}
          <MarkTaskDone
            done={task.done}
            taskId={task._id}
            taskTitle={task.title}
          />
          <NewNoteBtn setToggleNewNote={setToggleNewNote} />
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
        <NewNoteForm taskId={task._id} setToggleNewNote={setToggleNewNote} />
      )}
    </>
  );
};

export default React.memo(DayStatsTableRow);
