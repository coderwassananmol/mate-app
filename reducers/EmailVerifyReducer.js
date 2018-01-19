import {FETCHING_EMAIL, FETCHING_EMAIL_SUCCESS, FETCHING_EMAIL_FAILURE} from '../utils/ActionTypes';

const initialState = {
  isFetching : null,
  data : [],
  hasError : false,
  errorMessage : null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCHING_EMAIL:
      return Object.assign({},state, {
        isFetching : true,
        data : [],
        hasError : false,
        errorMessage : null
      });
      break;

    case FETCHING_EMAIL_SUCCESS:
      return Object.assign({},state, {
        isFetching : false,
        data : action.payload,
        hasError : false,
        errorMessage : null
      });
      break;

    case FETCHING_EMAIL_FAILURE:
      return Object.assign({},state, {
        isFetching : false,
        data : [],
        hasError : true,
        errorMessage : action.payload
      });
      break;

    default:
      return state;
  }
}
