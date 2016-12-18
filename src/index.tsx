import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router } from "./router";
import { Socket } from "./socket";

ReactDOM.render(
  <Router />,
  document.getElementById("root")
);

export let sock = new Socket();
