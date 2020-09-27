import { editEventCall } from "../drivers/Days/days.driver.js";

const setDayStart = (state, dayStart) => {
  state.dayStart = dayStart;
};

const setDayEnd = (state, dayEnd) => {
  state.dayEnd = dayEnd;
};

const editEvent = async (actions, { eventId, payload }) => {
  try {
    const res = await editEventCall(eventId, payload);

    if (!res.error) {
      actions.updateEvent({ eventId, payload });
    }
  } catch (error) {
    console.warn(error);
  }
};

const updateEvent = (state, { eventId, payload }) => {
  // Extract values - payload=[{propName: "title", propValue: "Updated title"}, {propName: "booked", propValue: "false"}];
  const updateVals = payload.reduce((acc, current) => {
    acc[current.propName] = current.propValue;
    return acc;
  }, {});
  // Update the new event values in state
  state.dayStats = state.dayStats.map(dayStat => {
    dayStat.events = dayStat.events.map(event => {
      if (event.eventId === eventId) {
        return { ...event, ...updateVals };
      }
      return event;
    });
    return dayStat;
  });
};

export { setDayStart, setDayEnd, editEvent, updateEvent };
