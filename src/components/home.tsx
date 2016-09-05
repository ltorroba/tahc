import * as React from "react";

import "../stylesheets/home";

export class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className="home">
        <div>
          <p className="figure">^_^</p>
          <p className="label">Start chatting by clicking a chat on the left</p>
          <p className="label">Or navigate to www.tahc.pw/chatname</p>
        </div>
      </div>
    );
  }
}
