import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import moment from "moment";

import TitleMain from "../../components/TitleMain/TitleMain.js";
import DayStatItem from "../../components/DayStatItem/DayStatItem";

const Stats = () => {
  const { dayStart, dayEnd, dayStats, statsFetched } = useStoreState(
    state => state
  );
  const { getDayStats } = useStoreActions(actions => actions);

  const query = new URLSearchParams(`start=${dayStart}&end=${dayEnd}`);

  const initStart = moment().subtract(1, "weeks").format("YYYY-MM-DD");

  useEffect(() => {
    query.set("start", initStart);
    (async () => {
      !statsFetched && (await getDayStats(query));
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TitleMain
        callFunction={getDayStats}
        query={query}
        mainNav={"#/stats"}
        secondNav={"#/stats/total"}
      >
        {"Stats"}
        {"Total"}
      </TitleMain>
      {dayStats.map(stat => (
        <DayStatItem key={stat.date} stat={stat} />
      ))}
    </>
  );
};

export default Stats;
