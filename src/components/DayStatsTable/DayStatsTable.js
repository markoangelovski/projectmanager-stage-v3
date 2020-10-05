import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { FaBook } from "react-icons/fa";

import { TableRowFix, EventRowCell } from "./DayStatsTable.styles.js";

import MarkEventBooked from "../MarkEventBooked/MarkEventBooked.js";

const DayStatsTableRow = ({ event, day }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <TableRowFix>
        <EventRowCell>
          <span onClick={() => setToggle(!toggle)}>{event.title}</span>
          <MarkEventBooked
            booked={event.booked}
            eventId={event.eventId}
            eventTitle={event.title}
          />
        </EventRowCell>
        <td style={{ textAlign: "center" }}>
          {event.duration}
          <small className="text-muted"> h</small>
        </td>
        <EventRowCell>
          <Link to={`/stats/${event.taskId}`}>{event.task}</Link>
          {event.kanboard && (
            <FaBook
              onClick={() =>
                window.open(
                  `${event.kanboard}#d=${day}&t=${event.duration}`,
                  "",
                  "resizable=yes,scrollbars=yes,width=1024,height=768"
                )
              }
            />
          )}
        </EventRowCell>
      </TableRowFix>
      {toggle &&
        event.logs.map((log, i) => (
          <tr key={i}>
            <td className="text-muted">- {log.title}</td>
            <td style={{ textAlign: "center" }}>
              {log.duration}
              <small className="text-muted"> h</small>
            </td>
            <td></td>
          </tr>
        ))}
    </>
  );
};

const DayStatsTable = ({ stat }) => {
  return (
    <Row>
      <Col>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>
              {moment(stat.date).format("dddd, MMMM Do YYYY")}
            </Card.Title>
            <Table striped hover responsive size="sm" className="mb-0">
              <colgroup>
                <col style={{ width: "50%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "40%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">Event</th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Duration
                  </th>
                  <th scope="col">Task</th>
                </tr>
              </thead>
              <tbody>
                {stat.events
                  .sort(
                    (a, b) =>
                      new Date(a.createdAt).getTime() -
                      new Date(b.createdAt).getTime()
                  )
                  .map((event, i) => (
                    <DayStatsTableRow
                      key={i}
                      event={event}
                      day={moment(stat.day).format("DD-MM")}
                    />
                  ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DayStatsTable;
