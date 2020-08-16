import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";

import HoursStatsGauge from "../HoursStatsGauge/HoursStatsGauge.js";
import DayStatsTable from "../DayStatsTable/DayStatsTable.js";

const DayStatItem = ({ dayStats }) => {
  return dayStats.map(stat => (
    <Fragment key={stat.date}>
      <Row>
        <HoursStatsGauge totalHours={stat.totalHoursWorked} type={"worked"}>
          Hours worked
        </HoursStatsGauge>
        <HoursStatsGauge totalHours={stat.totalHoursBooked} type={"booked"}>
          Hours booked
        </HoursStatsGauge>
        <HoursStatsGauge
          totalHours={stat.totalHoursPendingBooking}
          type={"pending"}
        >
          Pending booking
        </HoursStatsGauge>
        <HoursStatsGauge totalHours={stat.totalHoursOvertime} type={"overtime"}>
          Overtime
        </HoursStatsGauge>
      </Row>
      <DayStatsTable stat={stat} />
    </Fragment>
  ));
};
// const DayStatItem = ({ stat }) => {
//   return (
//     <>
//       <Row>
//         <HoursStatsGauge totalHours={stat.totalHoursWorked} type={"worked"}>
//           Hours worked
//         </HoursStatsGauge>
//         <HoursStatsGauge totalHours={stat.totalHoursBooked} type={"booked"}>
//           Hours booked
//         </HoursStatsGauge>
//         <HoursStatsGauge
//           totalHours={stat.totalHoursPendingBooking}
//           type={"pending"}
//         >
//           Pending booking
//         </HoursStatsGauge>
//         <HoursStatsGauge totalHours={stat.totalHoursOvertime} type={"overtime"}>
//           Overtime
//         </HoursStatsGauge>
//       </Row>
//       <DayStatsTable stat={stat} />
//     </>
//   );
// };

export default DayStatItem;
