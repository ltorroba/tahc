import * as React from "react";

import "../../stylesheets/chat";

export interface ChatProps { name: string; }

export class Chat extends React.Component<ChatProps, {}> {
  render() {
    return (
      <div className="chat">
        <header>
          <div>
            <h1>/{this.props.name}</h1>
            <p>Chat description here</p>
          </div>
        </header>
      </div>
    );
  }
}
