import * as React from "react";

import { MessageGroupContainer } from "../containers/message-group-container";

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

        <div className="chat-content">
          <MessageGroupContainer messages={ ["hey", "lol", "whatsup?"] } user="zesme" />
          <MessageGroupContainer messages={ ["hey", "lol", "whatsup?"] } user="MhX" />
        </div>

        <div className="chat-footer">
          <b>hi</b>
        </div>
      </div>
    );
  }
}
