import { combineReducers } from 'redux';
import FetchUserReducer from './FetchUserReducer';
import EmailVerifyReducer from './EmailVerifyReducer';
import EmailTokenVerify from './EmailTokenVerify';
export default combineReducers({
  user : FetchUserReducer,
  EmailVerify: EmailVerifyReducer,
  EmailTokenVerify: EmailTokenVerify
});
