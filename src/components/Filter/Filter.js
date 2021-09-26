import React from "react";
import { useStoreActions } from "easy-peasy";

const Filter = () => {
  const { filterTaskDocs } = useStoreActions(actions => actions);

  return (
    <input
      className="form-control form-control-dark w-100"
      type="text"
      placeholder="Filter"
      aria-label="Filter"
      onChange={e =>
        /tasks/.test(window.location.hash) &&
        /^[a-zA-Z0-9]*$/gi.test(e.target.value) &&
        filterTaskDocs(e.target.value)
      }
    ></input>
  );
};

export default Filter;
