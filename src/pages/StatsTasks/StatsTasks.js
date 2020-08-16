import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import TitleMain from "../../components/TitleMain/TitleMain.js";
import TaskStats from "../../components/TaskStats/TaskStats";

const StatsTasks = props => {
  const { dayStart, dayEnd, taskStats } = useStoreState(state => state);
  const { setTaskStats, getTaskStats } = useStoreActions(actions => actions);

  const query = new URLSearchParams(
    `start=${dayStart}&end=${dayEnd}&id=${props.match.params.projectId}`
  );

  useEffect(() => {
    (async () => {
      await getTaskStats(query);
    })();
    return () => setTaskStats([]);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TitleMain callFunction={getTaskStats} query={query}>
        Project stats: {taskStats[0] && taskStats[0].task}
      </TitleMain>
      {taskStats.map(stat => (
        <TaskStats key={stat.task} stat={stat} />
      ))}
    </>
  );
};

export default StatsTasks;
