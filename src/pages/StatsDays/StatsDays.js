import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import PageMetaData from "../../components/PageMetaData/PageMetaData.js";
import TitleMain from "../../components/TitleMain/TitleMain.js";
import DayStatItem from "../../components/DayStatItem/DayStatItem";

const StatsDays = () => {
  const { dayStart, dayEnd, dayStats, statsFetched } = useStoreState(
    state => state
  );
  const { getDayStats } = useStoreActions(actions => actions);

  const query = new URLSearchParams(`start=${dayStart}&end=${dayEnd}`);

  useEffect(() => {
    (async () => {
      !statsFetched && (await getDayStats(query));
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <PageMetaData title={`Day stats (${dayStats.length}) | jBot`} />
      <TitleMain
        callFunction={getDayStats}
        query={query}
        mainNav={"#/stats"}
        secondNav={"#/stats/total"}
      >
        {"Stats"}
        {"Total"}
      </TitleMain>
      {/* {dayStats.map(stat => (
        <DayStatItem key={stat.date} stat={stat} />
      ))} */}

      <DayStatItem dayStats={dayStats} />
    </>
  );
};

export default StatsDays;
