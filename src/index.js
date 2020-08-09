import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import App from "./App";
import store from "./lib/Model/store.model.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
