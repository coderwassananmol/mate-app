import { combineReducers } from 'redux';
import FetchUserReducer from './FetchUserReducer';
import EmailVerifyReducer from './EmailVerifyReducer';
import EmailTokenVerify from './EmailTokenVerify';
import ChatReducer from './ChatReducer';
export default combineReducers({
  user : FetchUserReducer,
  EmailVerify: EmailVerifyReducer,
  EmailTokenVerify: EmailTokenVerify,
  ChatReducer : ChatReducer
});
