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
  state.dayStats = dayStats;
};

const setDayStatsTotal = (state, dayStatsTotal) => {
  state.dayStatsTotal = dayStatsTotal[0];
};

const setTaskStats = (state, taskStats) => {
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
