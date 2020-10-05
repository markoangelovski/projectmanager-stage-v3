import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import TitleMain from "../../components/TitleMain/TitleMain.js";
import DayStatsTotal from "../../components/DayStatsTotal/DayStatsTotal";

const StatsDaysTotal = () => {
  const { dayStart, dayEnd, dayStatsTotal } = useStoreState(state => state);
  const { getDayStatsTotal } = useStoreActions(actions => actions);

  const query = new URLSearchParams(
    `start=${dayStart}&end=${dayEnd}&total=${true}`
  );

  useEffect(() => {
    (async () => {
      await getDayStatsTotal(query);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TitleMain
        callFunction={getDayStatsTotal}
        query={query}
        mainNav={"#/stats"}
        secondNav={"#/stats/total"}
      >
        {"Stats"}
        {"Total"}
      </TitleMain>
      {dayStatsTotal.map((stat, i) => (
        <DayStatsTotal key={i} stat={stat} />
      ))}
    </>
  );
};

export default StatsDaysTotal;
