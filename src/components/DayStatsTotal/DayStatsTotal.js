import React from "react";

const DayStatsTotal = ({ stat }) => {
  return (
    <>
      <div>Start: {stat.range.startDate}</div>
      <div>End: {stat.range.endDate}</div>
      <div>Total days: {stat.totalDays}</div>
      <div>Total events: {stat.totalEvents}</div>
      <div>Total logs: {stat.totalLogs}</div>
      <div>Total hours worked: {stat.totalHoursWorked}</div>
      <div>Total hours booked: {stat.totalHoursBooked}</div>
      <div>Total hours pending: {stat.totalHoursPendingBooking}</div>
      <div>Total hours overtime: {stat.totalHoursOvertime}</div>
    </>
  );
};

export default DayStatsTotal;
