import * as React from "react";

import { Chat } from "../views/chat-view";

export class ChatContainer extends React.Component<any, {}> {
  render() {
    return <Chat name={this.props.params.chatName} />
  }
}
