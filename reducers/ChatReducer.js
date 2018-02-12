import { SEND_MESSAGE, RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../utils/ActionTypes'

const initialState = {
  type : null,
  message : null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SEND_MESSAGE:
      return Object.assign({},state, {
        type : SEND_MESSAGE,
        message : action.message
      });
      break;

    case RECEIVE_ALL_MESSAGES:
      return Object.assign({},state, {
        type : RECEIVE_ALL_MESSAGES
      });
      break;

    case RECEIVE_MESSAGE:
      return Object.assign({},state, {
        type : RECEIVE_MESSAGE
      });
      break;

    default:
      return state;
  }
}
