import * as sio from 'socket.io-client';
import { store } from './reducers';
import * as Actions from './components/actions/chat-actions';

export class Socket {
  socket: any;
  constructor() {
    this.socket = sio("http://localhost:3000", null);
    this.setup();
  }

  setup() {
    this.socket.on('username', (res:any) => store.dispatch(Actions.loginSuccess(res)) );
    this.socket.on('userJoin', (res:any) => store.dispatch(Actions.userJoinRoom(res)) );
    this.socket.on('userLeave', (res:any) => store.dispatch(Actions.userLeaveRoom(res)) );
    this.socket.on('userList', (res:any) => store.dispatch(Actions.receiveRoomUserlist(res)) );
    this.socket.on('message', (res:any) => store.dispatch(Actions.receiveMessage(res.username, res.message)) );
  }

  joinRoom(room:string) {
    this.socket.emit('joinRoom', { room: room });
  }
}
