import React from "react";
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "../components/Protected/Protected.route.js";

// Page imports
import Homepage from "../pages/Homepage/Homepage.js";
import Stats from "../pages/Stats/Stats.js";
import Login from "../pages/Login/Login.js";
import Error from "../pages/Error/Error.js";

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={Homepage} />
      <ProtectedRoute exact path="/stats" component={Stats} />
      <Route exact path="/login" component={Login} />
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Routes;
