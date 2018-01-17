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
        isFetching: true,
        error: null,
        data: []
      });
      break;

    case FETCHING_EMAIL_SUCCESS:
      return Object.assign({},state, {
        isFetching : false,
        error: null,
        data: action.payload
      });
      break;

    case FETCHING_EMAIL_FAILURE:
      return Object.assign({},state, {
        isFetching : true,
        error: action.payload,
        data: []
      });
      break;

    default:
      return state;
  }
}
