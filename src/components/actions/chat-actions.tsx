import { createAction } from "redux-actions";

import * as Actions from "./action-types";
import { Message, Chat, User } from "./model";

export const loginSuccess = createAction(
  Actions.LOGIN_SUCCESS,
  (name: string) => ({ name: name })
);

export const userJoinRoom = createAction(
  Actions.USER_JOIN_ROOM,
  (name: string) => ({ name, messages: [] })
);

export const userLeaveRoom = createAction(
  Actions.USER_LEAVE_ROOM,
  (name: string) => ({ name: name })
);

export const receiveRoomUserlist = createAction(
  Actions.RECEIVE_ROOM_USERLIST,
  (users: [any]) => ({ users: users })
);

export const receiveMessage = createAction(
  Actions.RECEIVE_MESSAGE,
  (user: string, msg: string) => ({ user, msg })
);
