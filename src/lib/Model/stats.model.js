import { thunk, action } from "easy-peasy";

import {
  getDayStats,
  getDayStatsTotal,
  getTaskStats,
  setDayStats,
  setDayStatsTotal,
  setTaskStats
} from "../utils/stats.actions.js";

const statsStore = {
  // Stats state
  statsFetched: false,
  dayStats: [],
  dayStatsTotal: [],
  taskStats: [],

  // Stats thunks
  getDayStats: thunk((actions, payload) => getDayStats(actions, payload)),
  getDayStatsTotal: thunk((actions, payload) =>
    getDayStatsTotal(actions, payload)
  ),
  getTaskStats: thunk((actions, payload) => getTaskStats(actions, payload)),

  // Stats actions
  setDayStats: action((state, dayStats) => setDayStats(state, dayStats)),
  setDayStatsTotal: action((state, dayStats) =>
    setDayStatsTotal(state, dayStats)
  ),
  setTaskStats: action((state, taskStats) => setTaskStats(state, taskStats))
};

export default statsStore;
