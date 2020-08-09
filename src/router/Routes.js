import React from "react";
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "../components/Protected/Protected.route.js";

// Page imports
import Homepage from "../pages/Homepage/Homepage.js";
import Projects from "../pages/Projects/Projects.js";
import Tasks from "../pages/Tasks/Tasks.js";
import Clock from "../pages/Clock/Clock.js";
import Calendar from "../pages/Calendar/Calendar.js";
import Stats from "../pages/Stats/Stats.js";
import StatsTotal from "../pages/StatsTotal/StatsTotal.js";
import StatTask from "../pages/StatTask/StatTask.js";
import Login from "../pages/Login/Login.js";
import Error from "../pages/Error/Error.js";

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={Homepage} />
      <ProtectedRoute exact path="/projects" component={Projects} />
      <ProtectedRoute exact path="/tasks" component={Tasks} />
      <ProtectedRoute exact path="/clock" component={Clock} />
      <ProtectedRoute exact path="/calendar" component={Calendar} />
      <ProtectedRoute exact path="/stats" component={Stats} />
      <ProtectedRoute exact path="/stats/total" component={StatsTotal} />
      <ProtectedRoute exact path="/stats/:projectId" component={StatTask} />
      <Route exact path="/login" component={Login} />
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Routes;
