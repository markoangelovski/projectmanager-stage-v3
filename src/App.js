import React, { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";

import Routes from "./router/Routes.js";

const App = () => {
  // Check whether the user is authenticated before rendering the app
  const [initCheck, setInitCheck] = useState(false);

  const { checkAuth } = useStoreActions(actions => actions);

  useEffect(() => {
    (async () => {
      await checkAuth();
      setInitCheck(true);
    })();
    // eslint-disable-next-line
  }, []);

  if (initCheck) {
    return <Routes />;
  } else {
    return null;
  }
};

export default App;
