import { createAction } from "redux-actions";

import * as Actions from "./action-types";
import { Message, Chat, User } from "./model";

export const loginSuccess = createAction(
  Actions.LOGIN_SUCCESS,
  (name: string) => ({ name: name })
);

export const joinChatSuccess = createAction(
  Actions.JOIN_CHAT_SUCCESS,
  (name: string) => ({ name, messages: [] })
);

export const receiveMessageSuccess = createAction(
  Actions.RECEIVE_MESSAGE_SUCCESS,
  (user: string, msg: string) => ({ user, msg })
);
