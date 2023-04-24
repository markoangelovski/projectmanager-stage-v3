import {
  editEventCall,
  bookEventCall,
  deleteBookingCall
} from "../drivers/Days/days.driver.js";

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

const updateEvent = (state, updatedEvent) => {
  state.dayStats.map(dayStat => {
    dayStat.events = dayStat.events.map(event => {
      if (event.eventId === updatedEvent.eventId) {
        return {
          task: event.task,
          taskId: event.taskId,
          kanboard: event.kanboard,
          ...updatedEvent
        };
      }
      return event;
    });

    return dayStat;
  });
};

const correctEvent = event => ({
  ...event,
  eventId: event._id.$oid,
  day: event.day.$oid,
  bookingDetails: event.bookingDetails.map(detail => ({
    ...detail,
    _id: detail._id.$oid
  })),
  updatedAt: new Date(+event.updatedAt.$date.$numberLong).toISOString()
});

const bookEvent = async (actions, { eventId, day, amount }) => {
  try {
    const res = await bookEventCall(eventId, day, amount);

    if (!res.error) {
      const correctedEvent = correctEvent(res.event);

      actions.updateEvent(correctedEvent);
    } else {
      alert(res.error);
    }
  } catch (error) {
    console.warn(error);
  }
};

const deleteBooking = async (actions, { bookingId }) => {
  try {
    const res = await deleteBookingCall(bookingId);

    if (!res.error) {
      const correctedEvent = correctEvent(res.event);

      actions.updateEvent(correctedEvent);
    } else {
      alert(res.error);
    }
  } catch (error) {
    console.warn(error);
  }
};

export {
  setDayStart,
  setDayEnd,
  editEvent,
  updateEvent,
  deleteBooking,
  bookEvent
};
