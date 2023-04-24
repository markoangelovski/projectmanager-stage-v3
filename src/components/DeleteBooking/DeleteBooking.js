import React from "react";
import { useStoreActions } from "easy-peasy";
import { FaTrashAlt } from "react-icons/fa";

const DeleteBooking = ({ bookingId }) => {
  const { deleteBooking } = useStoreActions(actions => actions);

  const handleSubmit = bookingId => {
    window.confirm("Do you want to delete this booking?") &&
      deleteBooking({ bookingId });
  };

  return (
    <FaTrashAlt
      onClick={() => handleSubmit(bookingId)}
      style={{ opacity: "50%", marginLeft: "5px", cursor: "pointer" }}
    />
  );
};

export default DeleteBooking;
