import * as React from "react";

import "../../stylesheets/message-group.scss";

export interface MessageGroupProps { user: string; messages: [string]; }

export class MessageGroup extends React.Component<MessageGroupProps, {}> {
  render() {
    let id = 0;
    return (
      <div className="message-group">
        <p className="user">@{this.props.user}</p>
        <div className="messages">
          {this.props.messages.map(msg => {
              return (
                <p className="message" key={id++}>{msg}</p>
              );
          })}
        </div>
      </div>
    );
  }
}
