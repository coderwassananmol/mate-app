import { MESSAGE, CODE, POLL, GRAPH } from '../utils/ActionTypes'

const initialState = {
  message : null,
  type : null,
  sender : null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case MESSAGE:
      return Object.assign({},state, {
        message : action.message,
        type : action.type,
        sender : action.sender
      });
      break;

    case POLL:
      return Object.assign({},state, {
        message : action.message,
        type : action.type,
        sender : action.sender
      });
      break;

    case GRAPH:
      return Object.assign({},state, {
        message : action.message,
        type : action.type,
        sender : action.sender
      });
      break;

    case CODE:
      return Object.assign({},state, {
        message : action.message,
        type : action.type,
        sender : action.sender
      });
      break;

    default:
      return state;
  }
}
