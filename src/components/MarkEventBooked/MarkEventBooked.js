import React from "react";
import { useStoreActions } from "easy-peasy";
import { FaCheck, FaTimes } from "react-icons/fa";

import { EditEventIcon } from "./MarkEventBooked.styles.js";

const MarkEventBooked = ({ booked, eventId, eventTitle }) => {
  const { editEvent } = useStoreActions(actions => actions);

  const handleEditEvent = () => {
    if (
      window.confirm(
        `Mark event "${eventTitle}" as ${booked ? "not" : ""} booked?`
      )
    )
      editEvent({
        eventId,
        payload: [{ propName: "booked", propValue: !booked }]
      });
  };

  return (
    <EditEventIcon booked={booked} onClick={() => handleEditEvent()}>
      {booked ? <FaCheck /> : <FaTimes />}
    </EditEventIcon>
  );
};

export default MarkEventBooked;
