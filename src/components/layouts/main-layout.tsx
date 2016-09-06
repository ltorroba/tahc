import * as React from "react";

import { Header } from "../views/header-view";
import { AsideContainer } from "../containers/aside-container";

import "../../stylesheets/main";

import "../../stylesheets/aside";
import "../../stylesheets/container";

export class MainLayout extends React.Component<any, {}> {
  render() {
    return (
      <div className="app">
        <Header />

        <div className="middle-row">
          <AsideContainer />
          <main className="primary-container">
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}
