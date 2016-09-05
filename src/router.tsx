import * as React from "react";
import * as ReactRouter from "react-router";

// Layout
import { MainLayout } from "./components/layouts/main-layout";

// Other
import { Home } from "./components/home";

export class Router extends React.Component<{}, {}> {
  render() {
    return (
      <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route component={MainLayout}>
          <ReactRouter.Route path="/" component={Home} />
        </ReactRouter.Route>
      </ReactRouter.Router>
    );
  }
}
