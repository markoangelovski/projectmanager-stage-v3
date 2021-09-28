import React, { useState } from "react";

import MarkTaskDone from "../MarkTaskDone/MarkTaskDone.js";

import NewNoteBtn from "../Notes/NewNoteBtn.js";
import NewNoteForm from "../Notes/NewNoteForm.js";

import {
  EventRowCell,
  EventRowCellDueDate,
  TableRowFix
} from "./TasksDocsItem.styles.js";
import NoteRow from "../Notes/NoteRow.js";
import TaskExtermalLink from "./TaskExtermalLink.js";
import EditDueDate from "./EditDueDate.js";

import { dateFromNow, dateFull, getHsl } from "./Tasks.helpers.js";

const DayStatsTableRow = ({ task }) => {
  const renders = React.useRef(0);

  const [toggleDetails, setToggleDetails] = useState(false);
  const [toggleNewNote, setToggleNewNote] = useState(false);
  const [newDueDate, setNewDueDate] = useState();

  const lastNote = task.notes[task.notes.length - 1];

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
        <EventRowCellDueDate
          title={dateFull(task.dueDate)}
          data-date={task.dueDate}
          onDoubleClick={e => setNewDueDate(e.target.dataset.date)}
          hsl={getHsl(task.dueDate)}
        >
          {!newDueDate ? (
            <>
              <span></span>
              {dateFromNow(task.dueDate)}
            </>
          ) : (
            <EditDueDate
              taskId={task._id}
              taskTitle={task.title}
              date={parseInt(newDueDate)}
              setNewDueDate={setNewDueDate}
            />
          )}
        </EventRowCellDueDate>
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
