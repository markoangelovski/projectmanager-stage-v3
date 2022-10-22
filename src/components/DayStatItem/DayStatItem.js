import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";

import HoursStatsGauge from "../HoursStatsGauge/HoursStatsGauge.js";
import DayStatsTable, {
  toDisplayDate
} from "../DayStatsTable/DayStatsTable.js";
import { dateStd } from "../TasksDocsItem/Tasks.helpers.js";

const DayStatItem = ({ dayStats }) => {
  return dayStats.map((stat, i) => {
    // Extract the number of foreign external bookings per day
    const externalBookings = stat.events
      .map(event =>
        event.bookingDetails?.reduce((acc, detail) => {
          if (toDisplayDate(stat.day) !== toDisplayDate(detail.toDate)) {
            return acc + detail.amount;
          } else {
            return acc;
          }
        }, 0)
      )
      .reduce((acc, book) => (book ? acc + book : acc), 0);

    const hoursBooked = stat.events
      .map(event => {
        if (!event.bookingDetails) {
          if (event.booked) return event.duration;
          return 0;
        } else {
          return event.bookingDetails?.reduce((acc, detail) => {
            if (toDisplayDate(stat.day) === toDisplayDate(detail.toDate)) {
              return acc + detail.amount;
            } else {
              return acc;
            }
          }, 0);
        }
      })
      .reduce((acc, book) => (book ? acc + book : acc), 0);

    const hoursWorked = stat.events.reduce((acc, event) => {
      if (dateStd(event.date) === dateStd(stat.date)) {
        return acc + event.duration;
      } else {
        return acc;
      }
    }, 0);

    return (
      <Fragment key={stat.date}>
        <Row>
          <HoursStatsGauge totalHours={hoursWorked} type={"worked"}>
            Hours worked
          </HoursStatsGauge>
          <HoursStatsGauge totalHours={hoursBooked} type={"booked"}>
            Hours booked
          </HoursStatsGauge>
          <HoursStatsGauge totalHours={externalBookings} type={"external"}>
            External bookings
          </HoursStatsGauge>
          <HoursStatsGauge
            totalHours={stat.totalHoursOvertime}
            type={"overtime"}
          >
            Overtime
          </HoursStatsGauge>
        </Row>
        <DayStatsTable stat={stat} />
      </Fragment>
    );
  });
};

export default DayStatItem;
