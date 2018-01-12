import { combineReducers } from 'redux';
import FetchUserReducer from './FetchUserReducer';

export default combineReducers({
  user : FetchUserReducer
});
