import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const DateRangePicker = props => {
  const { dayStart, dayEnd } = useStoreState(state => state);
  const { setDayStart, setDayEnd } = useStoreActions(actions => actions);

  return (
    <Form
      inline
      className="d-inline-block mb-3"
      onSubmit={async e => {
        e.preventDefault();
        await props.callFunction(props.query);
      }}
    >
      <FormControl
        size="sm"
        type="date"
        className=" mr-sm-2"
        value={dayStart}
        onChange={e => setDayStart(e.target.value)}
      />
      <FormControl
        size="sm"
        type="date"
        className=" mr-sm-2"
        value={dayEnd}
        onChange={e => setDayEnd(e.target.value)}
      />
      <Button size="sm" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default DateRangePicker;
