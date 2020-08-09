import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Button from "react-bootstrap/Button";

import DateRangePicker from "../DateRangePicker/DateRangePicker";

const DayStatsTotal = () => {
  const { dayStart, dayEnd, dayStatsTotal } = useStoreState(state => state);
  const { getDayStatsTotal } = useStoreActions(actions => actions);

  const query = new URLSearchParams(`start=${dayStart}&end=${dayEnd}`);

  useEffect(() => {
    query.append("total", "true");
    (async () => {
      await getDayStatsTotal(query);
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <DateRangePicker />
      <Button
        size="sm"
        type="submit"
        onClick={async () => await getDayStatsTotal(query)}
      >
        Submit
      </Button>
    </>
  );
};

export default DayStatsTotal;
