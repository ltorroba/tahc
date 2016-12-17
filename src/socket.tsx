import * as sio from 'socket.io-client';
import { store } from './reducers';
import * as Actions from './components/actions/action-types';

export class Socket {
  socket: any;
  constructor() {
    this.socket = sio("http://localhost:3000", null);
    this.setup();
  }

  setup() {
    this.socket.on('username', function(response:any) {
      store.dispatch({
        type: Actions.LOGIN_SUCCESS,
        name: response.data
      });

      console.log(response.data);
    });
  }
}
