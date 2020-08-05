import React from "react";
import { useStoreActions } from "easy-peasy";

const Homepage = props => {
  const { logOut } = useStoreActions(actions => actions);

  console.log("home props", props);
  return (
    <div>
      <h1>homepage</h1>
      <button onClick={async () => await logOut()}>logout</button>
    </div>
  );
};

export default Homepage;
