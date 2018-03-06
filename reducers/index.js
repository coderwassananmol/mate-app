import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import ChatReducer from './ChatReducer';
export default combineReducers({
  User : UserReducer,
  ChatReducer : ChatReducer
});
