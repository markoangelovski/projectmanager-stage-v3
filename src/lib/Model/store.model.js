import moment from "moment";
import { createStore, thunk, action } from "easy-peasy";

import {
  setIsLoggedIn,
  logIn,
  logOut,
  checkAuth
} from "../utils/user.actions.js";

import { setDayStart, setDayEnd } from "../utils/events.actions.js";

import {
  getDayStats,
  getDayStatsTotal,
  getTaskStats,
  setDayStats,
  setDayStatsTotal,
  setTaskStats
} from "../utils/stats.actions.js";

const store = createStore({
  // User state
  isLoggedIn: false,
  // Events state
  dayStart: moment().startOf("month").format("YYYY-MM-DD"),
  dayEnd: moment().format("YYYY-MM-DD"),
  // Stats state
  dayStats: [],
  dayStatsTotal: {},
  taskStats: [],
  // User thunks
  logIn: thunk((actions, payload) => logIn(actions, payload)),
  logOut: thunk(actions => logOut(actions)),
  checkAuth: thunk((actions, payload) => checkAuth(actions, payload)),
  // Stats thunks
  getDayStats: thunk((actions, payload) => getDayStats(actions, payload)),
  getDayStatsTotal: thunk((actions, payload) =>
    getDayStatsTotal(actions, payload)
  ),
  getTaskStats: thunk((actions, payload) => getTaskStats(actions, payload)),
  // User actions
  setIsLoggedIn: action((state, payload) => setIsLoggedIn(state, payload)),
  // Events actions
  setDayStart: action((state, dayStart) => setDayStart(state, dayStart)),
  setDayEnd: action((state, dayEnd) => setDayEnd(state, dayEnd)),
  // Stats actions
  setDayStats: action((state, dayStats) => setDayStats(state, dayStats)),
  setDayStatsTotal: action((state, dayStats) =>
    setDayStatsTotal(state, dayStats)
  ),
  setTaskStats: action((state, taskStats) => setTaskStats(state, taskStats))
});

export default store;
