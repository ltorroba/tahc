import * as React from "react";
import { store } from '../../reducers';
import { connect} from 'react-redux';

import { Chat } from "../views/chat-view";

const mapStateToProps = function(store:any) {
  return {
    name: store.chat.name
  }
}

export const ChatContainer = connect(mapStateToProps)(Chat);
