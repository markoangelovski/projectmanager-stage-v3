import {
  getDayStatsCall,
  getTaskStatsCall
} from "../drivers/Stats/stats.driver.js";

const makeStatsCall = (driverCall, setAction) => async (actions, payload) => {
  try {
    const res = await driverCall(payload);
    if (!res.error) {
      actions[setAction](res.stats);
    }
  } catch (error) {
    console.warn(error);
  }
};

const getDayStats = makeStatsCall(getDayStatsCall, "setDayStats");
const getDayStatsTotal = makeStatsCall(getDayStatsCall, "setDayStatsTotal");
const getTaskStats = makeStatsCall(getTaskStatsCall, "setTaskStats");

const setDayStats = (state, dayStats) => {
  state.statsFetched = true;
  state.dayStats = dayStats;
};

const setDayStatsTotal = (state, dayStatsTotal) => {
  state.statsFetched = true;
  state.dayStatsTotal = dayStatsTotal;
};

const setTaskStats = (state, taskStats) => {
  state.statsFetched = true;
  state.taskStats = taskStats;
};

export {
  getDayStats,
  getDayStatsTotal,
  getTaskStats,
  setDayStats,
  setDayStatsTotal,
  setTaskStats
};
