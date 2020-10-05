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

const makeStatsSetter = stats => (state, payload) => {
  state.statsFetched = true;
  state[stats] = payload;
};

const setDayStats = makeStatsSetter("dayStats");
const setDayStatsTotal = makeStatsSetter("dayStatsTotal");
const setTaskStats = makeStatsSetter("taskStats");

export {
  getDayStats,
  getDayStatsTotal,
  getTaskStats,
  setDayStats,
  setDayStatsTotal,
  setTaskStats
};
