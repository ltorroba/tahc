import * as React from "react";

import "../../stylesheets/main";

import "../../stylesheets/header";
import "../../stylesheets/aside";
import "../../stylesheets/container";

export class MainLayout extends React.Component<any, {}> {
  render() {
    return (
      <div className="app">
        <header className="primary-header"></header>

        <div className="middle-row">
          <aside className="primary-aside"></aside>
          <main className="primary-container">
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}
