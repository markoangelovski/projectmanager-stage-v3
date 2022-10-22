import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

import { EditEventIcon } from "./MarkEventBooked.styles.js";

const MarkEventBooked = ({ booked }) => {
  return (
    <EditEventIcon booked={booked}>
      {booked ? <FaCheck /> : <FaTimes />}
    </EditEventIcon>
  );
};

export default MarkEventBooked;
