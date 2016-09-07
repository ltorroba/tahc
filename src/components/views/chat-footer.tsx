import * as React from "react";

import "../../stylesheets/chat-footer";

export class ChatFooter extends React.Component<{}, {}> {
  render() {
    return (
      <div className="chat-footer">
        <input type="text" placeholder="Type your message here..." />
        <button type="button">SEND</button>
      </div>
    );
  }
}
