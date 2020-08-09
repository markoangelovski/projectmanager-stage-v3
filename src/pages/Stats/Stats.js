import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Button from "react-bootstrap/Button";

import TitleMain from "../../components/TitleMain/TitleMain.js";
// import DayStatsTotal from "../../components/DayStatsTotal/DayStatsTotal";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import DayStatItem from "../../components/DayStatItem/DayStatItem";

const Stats = () => {
  const { dayStart, dayEnd, dayStats } = useStoreState(state => state);
  const { getDayStats } = useStoreActions(actions => actions);

  const query = new URLSearchParams(`start=${dayStart}&end=${dayEnd}`);

  return (
    <>
      <TitleMain>Stats</TitleMain>
      <DateRangePicker callFunction={getDayStats} query={query} />
      {/* <DayStatsTotal /> */}
      {dayStats.map(stat => (
        <DayStatItem key={stat.date} stat={stat} />
      ))}
    </>
  );
};

export default Stats;
