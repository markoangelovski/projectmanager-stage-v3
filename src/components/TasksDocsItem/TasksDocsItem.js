import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

const TasksDocsItem = ({ tasks }) => {
  return (
    <CardColumns>
      {tasks.map(task => (
        <Card key={task._id}>
          <Card.Header>{task.column}</Card.Header>
          <Card.Body>
            <Card.Title>{task.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{task.pl}</Card.Subtitle>
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
          </Card.Footer>
        </Card>
      ))}
    </CardColumns>
  );
};

export default TasksDocsItem;
