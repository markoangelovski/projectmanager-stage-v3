import React from "react";

const TaskStats = ({ stat }) => {
  return (
    <>
      <div>Start: {stat.range.startDate}</div>
      <div>End: {stat.range.endDate}</div>
      <div>Task: {stat.task}</div>
      <div>Description: {stat.description}</div>
      <div>Kanboard: {stat.kanboard}</div>
      <div>Total events: {stat.totalEvents}</div>
      <div>Total hours worked: {stat.totalHoursWorked}</div>
      <div>Total hours booked: {stat.totalHoursBooked}</div>
      <div>Total hours pending: {stat.totalHoursPendingBooking}</div>
    </>
  );
};

export default TaskStats;
