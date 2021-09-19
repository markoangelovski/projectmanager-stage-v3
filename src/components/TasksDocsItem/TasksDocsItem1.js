import React, { useState } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

import MarkTaskDone from "../MarkTaskDone/MarkTaskDone.js";

import NoteEditor from "../NoteEditor/NoteEditor.js";

const TasksDocsItem = ({ tasks }) => {
  const [taskId, setTaskId] = useState(null);
  const [showNoteEditor, setShowNoteEditor] = useState(false);

  return (
    <>
      <CardColumns>
        {tasks.map(task => (
          <Card key={task._id}>
            <Card.Header>
              {task.column}
              <MarkTaskDone
                done={task.done}
                taskId={task._id}
                taskTitle={task.title}
              />
            </Card.Header>
            <Card.Body>
              <Card.Title>{task.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {task.pl}
              </Card.Subtitle>
              <Card.Text>{task.description}</Card.Text>
              <Card.Text>
                Events: {task.eventsCount || 0} Notes: {task.notesCount || 0}
              </Card.Text>
              {task.kanboard && (
                <Card.Link href={task.kanboard} target="_blank">
                  Kanboard
                </Card.Link>
              )}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{task.createdAt}</small>
              <div
                onClick={() => {
                  setTaskId(task._id);
                  setShowNoteEditor(!showNoteEditor);
                }}
              >
                Add note
              </div>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
      {showNoteEditor && (
        <NoteEditor taskId={taskId} setShowNoteEditor={setShowNoteEditor} />
      )}
    </>
  );
};

export default TasksDocsItem;
