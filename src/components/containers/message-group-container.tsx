import * as React from "react";

import { MessageGroup } from "../views/message-group-view";

export interface MessageGroupContainerProps { user: string; messages: [string]; }

export class MessageGroupContainer extends React.Component<MessageGroupContainerProps, {}> {
  render() {
    return <MessageGroup user={this.props.user} messages={this.props.messages} />
  }
}
