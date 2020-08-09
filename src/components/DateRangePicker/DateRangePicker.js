import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

const DateRangePicker = props => {
  const { dayStart, dayEnd } = useStoreState(state => state);
  const { setDayStart, setDayEnd } = useStoreActions(actions => actions);

  return (
    <ButtonToolbar className="">
      <Form
        inline
        className="d-inline-block"
        onSubmit={async e => {
          e.preventDefault();
          await props.callFunction(props.query);
        }}
      >
        <InputGroup size="sm" className="">
          <FormControl
            size="sm"
            type="date"
            className=""
            value={dayStart}
            onChange={e => setDayStart(e.target.value)}
          />
          <FormControl
            size="sm"
            type="date"
            className=""
            value={dayEnd}
            onChange={e => setDayEnd(e.target.value)}
          />
          <InputGroup.Append>
            <Button
              size="sm"
              type="submit"
              variant="outline-secondary"
              className="dropdown-toggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-calendar mr-1"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </ButtonToolbar>
    /* </div> */
  );
};

export default DateRangePicker;
