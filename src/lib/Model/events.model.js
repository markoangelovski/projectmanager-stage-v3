import moment from "moment";
import { thunk, action } from "easy-peasy";

import {
  setDayStart,
  setDayEnd,
  editEvent,
  updateEvent
} from "../utils/events.actions.js";

const eventsStore = {
  // Events state
  dayStart: moment().startOf("week").format("YYYY-MM-DD"),
  dayEnd: moment().format("YYYY-MM-DD"),

  // Events thunks
  editEvent: thunk((actions, eventId, payload) =>
    editEvent(actions, eventId, payload)
  ),

  // Events actions
  setDayStart: action((state, dayStart) => setDayStart(state, dayStart)),
  setDayEnd: action((state, dayEnd) => setDayEnd(state, dayEnd)),
  updateEvent: action((state, payload) => updateEvent(state, payload))
};

export default eventsStore;
