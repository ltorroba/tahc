import * as Actions from './components/actions/chat-actions'
import { handleActions } from 'redux-actions';
import { createStore } from 'redux';

interface State {
  user: any;
  chat: {
    name: string,
    messages: any[],
    users: any[]
  }
}

const default_state:State = {
  user: { name: "" },

  chat: {
    name: "",
    messages: [],
    users: []
  }
}

const reducer = handleActions({
  LOGIN_SUCCESS: (state:any, action:any) => (Object.assign({}, state, { user: { name: action.payload.name }} )),
  USER_JOIN_ROOM: (state:any, action:any) => (Object.assign({}, state, { chat: { messages: [], users: [] }} )),
  USER_LEAVE_ROOM: function (state:any, action:any) {
    let new_users = state.chat.users.splice(state.chat.users.indexOf(action.payload.user), 1);
    return Object.assign({}, state, { chat: { users: new_users }});
  },
  RECEIVE_ROOM_USERLIST: function (state:any, action:any) {
    return Object.assign({}, state, { chat: { name: action.payload.users.room, users: action.payload.users.users }});
  },
  RECEIVE_MESSAGE: function (state:any, action:any) {
    let new_messages = state.chat.messages.push(action.payload);
    return Object.assign({}, state, { messages: new_messages });
  }
}, default_state);

//export const store = createStore(reducer);
const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
export const store: any = enhancer(reducer, default_state);

