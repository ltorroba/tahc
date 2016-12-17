import * as Actions from './components/actions/chat-actions'
import { handleActions } from 'redux-actions';
import { createStore } from 'redux';

const reducer = handleActions({
  LOGIN_SUCCESS: (state, action) => ({
    user: action.payload
  })

});

export let store = createStore(reducer);


