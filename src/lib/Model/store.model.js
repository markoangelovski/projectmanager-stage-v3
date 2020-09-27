import moment from "moment";
import { createStore, thunk, action } from "easy-peasy";

import {
  setIsBackendAlive,
  setIsLoggedIn,
  logIn,
  logOut,
  checkAuth
} from "../utils/user.actions.js";

import {
  getTaskDocs,
  setTaskDocs,
  setHasMoreTaskDocs
} from "../utils/tasks.actions.js";

import {
  setDayStart,
  setDayEnd,
  editEvent,
  updateEvent
} from "../utils/events.actions.js";

import {
  getDayStats,
  getDayStatsTotal,
  getTaskStats,
  setDayStats,
  setDayStatsTotal,
  setTaskStats
} from "../utils/stats.actions.js";

const store = createStore({
  // Backend state
  isBackendAlive: true,
  // User state
  isLoggedIn: false,
  // Tasks state
  taskDocs: [],
  taskDocsSkip: 0,
  hasMoreTaskDocs: false,
  // Events state
  dayStart: moment().startOf("week").format("YYYY-MM-DD"),
  dayEnd: moment().format("YYYY-MM-DD"),
  // Stats state
  statsFetched: false,
  dayStats: [],
  dayStatsTotal: [],
  taskStats: [],
  // User thunks
  logIn: thunk((actions, payload) => logIn(actions, payload)),
  logOut: thunk(actions => logOut(actions)),
  checkAuth: thunk((actions, payload) => checkAuth(actions, payload)),
  // Tasks thunks
  getTaskDocs: thunk((actions, payload) => getTaskDocs(actions, payload)),
  // Events thunks
  editEvent: thunk((actions, eventId, payload) =>
    editEvent(actions, eventId, payload)
  ),
  // Stats thunks
  getDayStats: thunk((actions, payload) => getDayStats(actions, payload)),
  getDayStatsTotal: thunk((actions, payload) =>
    getDayStatsTotal(actions, payload)
  ),
  getTaskStats: thunk((actions, payload) => getTaskStats(actions, payload)),
  // Backend actions
  setIsBackendAlive: action((state, payload) =>
    setIsBackendAlive(state, payload)
  ),
  // User actions
  setIsLoggedIn: action((state, payload) => setIsLoggedIn(state, payload)),
  // Tasks actions
  setTaskDocs: action((state, payload) => setTaskDocs(state, payload)),
  setHasMoreTaskDocs: action((state, payload) =>
    setHasMoreTaskDocs(state, payload)
  ),
  // Events actions
  setDayStart: action((state, dayStart) => setDayStart(state, dayStart)),
  setDayEnd: action((state, dayEnd) => setDayEnd(state, dayEnd)),
  updateEvent: action((state, payload) => updateEvent(state, payload)),
  // Stats actions
  setDayStats: action((state, dayStats) => setDayStats(state, dayStats)),
  setDayStatsTotal: action((state, dayStats) =>
    setDayStatsTotal(state, dayStats)
  ),
  setTaskStats: action((state, taskStats) => setTaskStats(state, taskStats))
});

export default store;
