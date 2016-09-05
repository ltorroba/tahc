import * as React from "react";

import "../../stylesheets/header";

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className="primary-header">
        <h1>TAHC</h1>
      </header>
    );
  }
}
