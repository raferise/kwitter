import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="kwitter-infinitymeme">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
