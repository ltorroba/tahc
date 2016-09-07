import * as React from "react";

import { MessageGroupContainer } from "../containers/message-group-container";
import { ChatFooter } from "../views/chat-footer";

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
          <MessageGroupContainer messages={ ["hey", "lol", "whatsup?"] } user="zesme" />
          <MessageGroupContainer messages={ ["hey", "lol", "whatsup?"] } user="MhX" />
          <MessageGroupContainer messages={ ["hey", "lol", "whatsup?"] } user="zesme" />
          <MessageGroupContainer messages={ ["hey", "lol", "whatsup?"] } user="MhX" />
          <MessageGroupContainer messages={ ["hey", "lol", "whatsup?"] } user="zesme" />
          <MessageGroupContainer messages={ ["hey", "lol", "whatsup?"] } user="MhX" />
        </div>

        <ChatFooter />
      </div>
    );
  }
}
