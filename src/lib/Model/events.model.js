import moment from "moment";
import { thunk, action } from "easy-peasy";

import {
  setDayStart,
  setDayEnd,
  editEvent,
  // updateEvent,
  updateEvent1,
  bookEvent,
  deleteBooking
} from "../utils/events.actions.js";

const eventsStore = {
  // Events state
  dayStart: moment().startOf("week").format("YYYY-MM-DD"),
  dayEnd: moment().format("YYYY-MM-DD"),

  // Events thunks
  editEvent: thunk((actions, payload) => editEvent(actions, payload)),
  bookEvent: thunk((actions, payload) => bookEvent(actions, payload)),
  deleteBooking: thunk((actions, payload) => deleteBooking(actions, payload)),

  // Events actions
  setDayStart: action((state, dayStart) => setDayStart(state, dayStart)),
  setDayEnd: action((state, dayEnd) => setDayEnd(state, dayEnd)),
  // updateEvent: action((state, payload) => updateEvent(state, payload)),
  updateEvent1: action((state, payload) => updateEvent1(state, payload))
};

export default eventsStore;
