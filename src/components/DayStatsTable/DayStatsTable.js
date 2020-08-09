import React, { useState } from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { FaCheck, FaTimes, FaBook } from "react-icons/fa";

import { TableRowFix, EventRowCell } from "./DayStatsTable.styles.js";

// title(pin):"Supervision"
// duration(pin):0.75
// booked(pin):false
// task(pin):"IP_Supervision"
// kanboard(pin):"https://cmgc.rocks/project/711/task/40149"

const DayStatsTableRow = ({ event }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <TableRowFix>
        <EventRowCell booked={event.booked} onClick={() => setToggle(!toggle)}>
          <span>{event.title}</span>
          {event.booked ? <FaCheck /> : <FaTimes />}
        </EventRowCell>
        <td style={{ textAlign: "center" }}>
          {event.duration}
          <small className="text-muted"> h</small>
        </td>
        <EventRowCell>
          <span>{event.task}</span>
          {event.kanboard && (
            <FaBook
              onClick={() =>
                window.open(
                  `${event.kanboard}#t-${event.duration}`,
                  "",
                  "resizable=yes,scrollbars=yes,width=800,height=600"
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
                {stat.events.map((event, i) => (
                  <DayStatsTableRow key={i} event={event} />
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
