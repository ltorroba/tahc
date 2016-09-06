import * as React from "react";
import { Link } from "react-router";

import "../../stylesheets/header";

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className="primary-header">
        <Link to="/"><h1>TAHC</h1></Link>
      </header>
    );
  }
}
