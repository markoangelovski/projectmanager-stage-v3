import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
import { Button, Form, InputGroup } from "react-bootstrap";

const BookEvent = ({ date, eventId, amount, disabled }) => {
  const [selectedAmount, setSelectedAmount] = useState(amount);
  const [selectedDate, setSelectedDate] = useState(date);

  const { bookEvent } = useStoreActions(actions => actions);

  const handleBookEvent = async () => {
    if (!amount) return alert("Please select an amount!");
    if (!selectedDate) return alert("Please select a date!");

    window.confirm(
      `Do you want to book ${selectedAmount}h to ${selectedDate}?`
    ) &&
      (await bookEvent({
        eventId,
        day: selectedDate,
        amount: selectedAmount
      }));
  };

  return (
    <div style={{ width: "300px" }}>
      <InputGroup size="sm" className="">
        <Form.Control
          placeholder="Amount"
          type="number"
          step={0.25}
          min={0.25}
          max={7.5}
          value={selectedAmount}
          onChange={e => setSelectedAmount(e.target.value)}
          disabled={disabled}
        />
        <Form.Control
          placeholder="Amount"
          type="date"
          style={{ width: "100px" }}
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
          disabled={disabled}
        />
        <Button
          size="sm"
          variant="outline-secondary"
          onClick={handleBookEvent}
          disabled={disabled}
        >
          Book
        </Button>
      </InputGroup>
    </div>
  );
};

export default BookEvent;
