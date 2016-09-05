import * as React from "react";

export class MainLayout extends React.Component<any, {}> {
  render() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside"></aside>

        <main className="primary-container">
          {this.props.children}
        </main>
      </div>
    );
  }
}
