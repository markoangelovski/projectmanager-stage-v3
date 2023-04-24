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
import BookEvent from "../BookEvent/BookEvent.js";
import DeleteBooking from "../DeleteBooking/DeleteBooking.js";

export const toDisplayDate = date => moment(date).format("DD.MM.YY");

const DayStatsTableRow = ({ event, day }) => {
  const [toggle, setToggle] = useState(false);

  const dropdownRows = Math.max(
    event.logs.length,
    event.bookingDetails ? event.bookingDetails.length : 0
  );

  const isSameDay = toDisplayDate(day) === toDisplayDate(event.date);

  const durationBookedExternal = event.bookingDetails
    ?.filter(detail => detail.toDate === day)
    .reduce((acc, current) => acc + current.amount, 0);

  const durationBooked = durationBookedExternal
    ? durationBookedExternal
    : event.booked
    ? event.duration
    : 0;

  return (
    <>
      <TableRowFix>
        <EventRowCell>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setToggle(!toggle)}
          >
            {event.title}
          </span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BookEvent
              date={day}
              eventId={event.eventId}
              amount={event.duration}
              disabled={!isSameDay}
            />
          </div>
        </EventRowCell>
        <td style={{ textAlign: "center" }}>
          <span>
            {event.duration}
            <small className="text-muted"> h</small>
          </span>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1
          }}
        >
          <span>
            {durationBooked || 0}
            <small className="text-muted"> h</small>
          </span>
          <MarkEventBooked booked={event.booked} />
        </td>
        <td style={{ textAlign: "center" }}>
          {!isSameDay && toDisplayDate(event.date)}
        </td>
        <EventRowCell>
          <Link to={`/stats/${event.taskId}`}>{event.task}</Link>
          {event.kanboard && (
            <FaBook
              onClick={() =>
                window.open(
                  `${event.kanboard}#d=${moment(day).format("DD-MM")}&t=${
                    event.duration
                  }`,
                  "",
                  "resizable=yes,scrollbars=yes,width=1280,height=1024"
                )
              }
            />
          )}
        </EventRowCell>
      </TableRowFix>
      {toggle &&
        Array.from({ length: dropdownRows }, (_, i) => {
          const dayFmt = toDisplayDate(day);
          const bookingDayFmt = toDisplayDate(
            event.bookingDetails?.[i]?.toDate
          );
          return (
            <tr key={i}>
              {event.logs[i] ? (
                <>
                  <td className="text-muted">- {event.logs[i]?.title}</td>
                  <td style={{ textAlign: "center" }}>
                    {event.logs[i]?.duration}
                    <small className="text-muted"> h</small>
                  </td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
              {event.bookingDetails?.[i] ? (
                <>
                  <td style={{ textAlign: "center" }}>
                    <small className="text-muted">
                      {`${
                        dayFmt === bookingDayFmt
                          ? ""
                          : "booked to " + bookingDayFmt
                      }`}
                    </small>{" "}
                    {event.bookingDetails[i].amount}
                    <small className="text-muted"> h</small>
                    {isSameDay && (
                      <DeleteBooking
                        bookingId={event.bookingDetails?.[i]?._id}
                      />
                    )}
                  </td>
                  <td></td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
              <td></td>
              {/* <td></td> */}
            </tr>
          );
        })}
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
                <col style={{ width: "5%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "7%" }} />
                <col style={{ width: "23%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">Event</th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Worked
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Booked
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Worked on
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
                    <DayStatsTableRow key={i} event={event} day={stat.day} />
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
